// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDttsy82f94qHAdXYaC4leFjmCXAtwV_C4",
  authDomain: "adminproject-a61d8.firebaseapp.com",
  projectId: "adminproject-a61d8",
  storageBucket: "adminproject-a61d8.firebasestorage.app",
  messagingSenderId: "485106507513",
  appId: "1:485106507513:web:638a6a064306a0c04e4c28",
  measurementId: "G-V1EEGKXY7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore using modular approach
const auth = getAuth(app);
const db = getFirestore(app);



// Export the auth, db, and signInWithEmailAndPassword functions
export { auth, db, signInWithEmailAndPassword };
