import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"; // Updated to HashRouter
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { ProtectedRouteForAdmin } from './pages/ProtectedRouteForAdmin'; 
import { useAuth } from './context/myState'; // Import useAuth to get user state
import { signOut } from 'firebase/auth'; // Import Firebase signOut method
import { auth } from './firebase'; // Import Firebase auth
import PersonalTraining from './pages/PersonalTraining';
import FAQ from './pages/Faq';
import TermsAndPolicy from './pages/TermsAndPolicy';
import Gallery from './pages/Gallery';
import logo from './assets/time.png';

const App = () => {
  const { user, isAdmin } = useAuth(); // Get the current user and isAdmin status from context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      console.log("User logged out");
      setIsLoggedIn(false); // Update state after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Router> {/* Use HashRouter */}
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container>
          {/* Logo and Brand Name */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" width={50} className="me-2" />

            <span className="brand-text">TimeFitness Club</span>
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/home" className="nav-link px-2">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="nav-link px-2">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="nav-link px-2">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/personal-training" className="nav-link px-2">Personal Training</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="nav-link px-2">Gym Gallery</Nav.Link>
              <Nav.Link as={Link} to="/terms" className="nav-link px-2">Terms & Policy</Nav.Link>
              <Nav.Link as={Link} to="/faq" className="nav-link px-2">FAQ</Nav.Link>
              {user && isAdmin && (
                <Nav.Link as={Link} to="/admin" className="nav-link px-2">Admin</Nav.Link>
              )}
              {!isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-link px-2">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup" className="nav-link px-2">Sign Up</Nav.Link>
                </>
              ) : (
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="ms-2 logout-btn"
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<TermsAndPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRouteForAdmin>
              <Admin />
            </ProtectedRouteForAdmin>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
