import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import for Firebase v9+
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to manage error messages
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      // Authenticate the user
      await signInWithEmailAndPassword(auth, email, password); // Updated method

      // After login, check if user is admin and navigate accordingly
      const user = auth.currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const isAdmin = idTokenResult.claims.isAdmin || false;
        if (isAdmin) {
          navigate('/admin'); // Redirect to admin page if user is an admin
        } else {
          navigate('/'); // Redirect to home page if user is not an admin
        }
      }

      // Clear the form after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.code === 'auth/user-not-found') {
        setError("No user found with this email.");
      } else if (error.code === 'auth/wrong-password') {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Failed to login. Please check your credentials.");
      }
    }
  };

  return (
    <Container className="login-container">
      <h1>Login</h1>
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error if present */}
      
      <Form onSubmit={handleLogin}>
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
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
