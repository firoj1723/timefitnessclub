import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { Container, Button, Form, ListGroup, Spinner } from 'react-bootstrap';
import { doc, getDoc, collection, getDocs, deleteDoc, addDoc, orderBy, query } from 'firebase/firestore';

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for checking user data and notifications
  const [notification, setNotification] = useState(''); // State to hold new notification text
  const [notifications, setNotifications] = useState([]); // State to hold list of notifications
  const [notificationLoading, setNotificationLoading] = useState(false); // Loading state for notifications
  const [users, setUsers] = useState([]); // State to hold list of users
  const [userLoading, setUserLoading] = useState(true); // Loading state for users
  const [contacts, setContacts] = useState([]); // State to hold list of contacts
  const [contactLoading, setContactLoading] = useState(true); // Loading state for contacts

  // Check if the current user is an admin
  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setIsAdmin(userDoc.data()?.isAdmin);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  // Fetch notifications from Firestore
  useEffect(() => {
    const fetchNotifications = async () => {
      setNotificationLoading(true);
      const notificationsRef = collection(db, 'notifications');
      const q = query(notificationsRef, orderBy('timestamp', 'desc'));
      try {
        const querySnapshot = await getDocs(q);
        const fetchedNotifications = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
      setNotificationLoading(false);
    };
    fetchNotifications();
  }, []);

  // Fetch user list from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      setUserLoading(true);
      const usersRef = collection(db, 'users');
      try {
        const querySnapshot = await getDocs(usersRef);
        const fetchedUsers = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setUserLoading(false);
    };
    fetchUsers();
  }, []);

  // Fetch contacts from Firestore
  useEffect(() => {
    const fetchContacts = async () => {
      setContactLoading(true);
      const contactsRef = collection(db, 'Contacts');
      try {
        const querySnapshot = await getDocs(contactsRef);
        const fetchedContacts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setContacts(fetchedContacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
      setContactLoading(false);
    };
    fetchContacts();
  }, []);

  // Handle adding a new notification
  const handleAddNotification = async (e) => {
    e.preventDefault();
    if (notification.trim()) {
      try {
        await addDoc(collection(db, 'notifications'), {
          message: notification,
          timestamp: new Date()
        });
        setNotification(''); // Clear input field
        setNotifications(prev => [{ message: notification, timestamp: new Date() }, ...prev]);
      } catch (error) {
        console.error("Error adding notification:", error);
      }
    }
  };

  // Handle deleting a notification
  const handleDeleteNotification = async (id) => {
    try {
      await deleteDoc(doc(db, 'notifications', id));
      setNotifications(prev => prev.filter(notification => notification.id !== id));
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
      setUsers(prev => prev.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle deleting a contact
  const handleDeleteContact = async (contactId) => {
    try {
      await deleteDoc(doc(db, 'Contacts', contactId));
      setContacts(prev => prev.filter(contact => contact.id !== contactId));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Show loading state while checking user privileges
  if (loading) return <p>Loading user data...</p>;

  // Show access denied if user is not an admin
  if (!isAdmin) return <p>Access Denied. Admins only.</p>;

  // Show loading state while fetching notifications
  if (notificationLoading) return <Spinner animation="border" />;

  // Show loading state while fetching users
  if (userLoading) return <Spinner animation="border" />;

  // Show loading state while fetching contacts
  if (contactLoading) return <Spinner animation="border" />;

  // Admin content
  return (
    <Container>
      <h1>Admin Page</h1>
      
      <Form onSubmit={handleAddNotification}>
        <Form.Group controlId="notification">
          <Form.Label>Add Notification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter notification message"
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">Add Notification</Button>
      </Form>

      <h2 className="mt-4">Existing Notifications</h2>
      <ListGroup>
        {notifications.map((notif) => (
          <ListGroup.Item key={notif.id} className="d-flex justify-content-between align-items-center">
            <span>{notif.message}</span>
            <Button variant="danger" onClick={() => handleDeleteNotification(notif.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2 className="mt-4">User List</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
            <span>{user.email}</span>
            <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2 className="mt-4">Contact List</h2>
      <ListGroup>
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{contact.name}</strong> ({contact.email})<br />
              <span>Mobile: {contact.mobile}</span><br />
              <span>Preferred Shift: {contact.preferredShift}</span>
            </div>
            <Button variant="danger" onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Admin;
