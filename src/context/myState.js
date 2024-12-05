import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase'; // Ensure db is correctly imported
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); // This will return the context value
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const checkAdmin = async () => {
          try {
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              setIsAdmin(userDoc.data()?.isAdmin);
            }
          } catch (error) {
            console.error('Error checking admin status:', error);
          }
        };
        checkAdmin();
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
