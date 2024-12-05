import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Footer from './Footer';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Container, Row, Col, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhatsAppChat from './WhatsAppChat'; // Import WhatsAppChat component
import './Home.css'; // Add your custom CSS for more styling

function Home() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationsRef = collection(db, 'notifications');
      const q = query(notificationsRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedNotifications = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(fetchedNotifications);
    };
    fetchNotifications();
  }, []);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <WhatsAppChat /> {/* Place the WhatsApp chat button here */}

      <Container className="mt-5">
        <h1 className="text-center mb-4 text-primary font-weight-bold display-4">Welcome to TimeFitness Club</h1>
        <p className="text-center mb-3 text-muted lead">
          Achieve your fitness goals with us and become your best self!
        </p>

        {/* Marquee Section */}
        {/* Scrolling Image Marquee */}
<div className="image-marquee mb-4">
  <div className="marquee-content">
    <img src="/gym.png" alt="Fitness 1" className="marquee-image" />
    <img src="/time.png" alt="Fitness 3" className="marquee-image" />
    <img src="/gym.png" alt="Fitness 2" className="marquee-image" />
    <img src="/time.png" alt="Fitness 3" className="marquee-image" />
    <img src="/gym.png" alt="Fitness 2" className="marquee-image" />
    <img src="/time.png" alt="Fitness 3" className="marquee-image" />
  </div>
</div>


        <Row className="g-4">
          {/* Program Card */}
          <Col xs={12} md={4}>
            <Card className="shadow-lg border-0 rounded-lg custom-card">
              <Card.Body>
                <Card.Title className="text-success">Our Programs</Card.Title>
                <Card.Text>
                  Explore our training programs designed for all fitness levels, from beginners to pros.
                </Card.Text>
                <Button variant="success" as={Link} to="/about-us" className="w-100 custom-btn">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Personal Training Card */}
          <Col xs={12} md={4}>
            <Card className="shadow-lg border-0 rounded-lg custom-card">
              <Card.Body>
                <Card.Title className="text-warning">Personal Training</Card.Title>
                <Card.Text>
                  Get personalized fitness coaching from our certified trainers tailored to your needs.
                </Card.Text>
                <Button variant="warning" as={Link} to="/personal-training" className="w-100 custom-btn">
                  Book a Session
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Us Card */}
          <Col xs={12} md={4}>
            <Card className="shadow-lg border-0 rounded-lg custom-card">
              <Card.Body>
                <Card.Title className="text-info">Contact Us</Card.Title>
                <Card.Text>
                  Have questions? We're here to help. Get in touch with us today to start your fitness journey.
                </Card.Text>
                <Button variant="info" as={Link} to="/contact-us" className="w-100 custom-btn">
                  Contact
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Notifications Section */}
        <Col xs={12} className="mt-5">
          <h2 className="text-center mb-3 text-primary">Latest Notifications</h2>

          <div className="notification-list">
            {notifications.length > 0 ? (
              <ListGroup className="mb-4">
                {notifications.map((notif) => (
                  <ListGroup.Item
                    key={notif.id}
                    className="d-flex justify-content-between align-items-center p-3 mb-2 bg-light text-dark rounded-3 shadow-sm custom-list-item"
                  >
                    <div>
                      <strong>{notif.message}</strong>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <Alert variant="info">No new notifications at the moment.</Alert>
            )}
          </div>
        </Col>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
