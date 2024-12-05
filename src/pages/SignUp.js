import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { auth, db } from '../firebase'; // Keep only the required imports
import './SignUp.css'; // Import the custom CSS

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before submission

    // Basic validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a user document in Firestore with the user's email and isAdmin flag
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        isAdmin: isAdmin // If true, the user is an admin
      });

      // Clear form after successful sign up
      setEmail('');
      setPassword('');
      setIsAdmin(false);

      // Redirect user to home or another page
      navigate('/');
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up. Please try again."); // Set error message
    }
  };

  return (
    <Container className="signup-container">
      <h1>Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error if present */}
      <Form onSubmit={handleSignUp}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
