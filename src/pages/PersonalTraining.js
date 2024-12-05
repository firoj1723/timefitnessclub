import React from "react";
import { Button, Card, Container, Row, Col, ListGroup, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './PersonalTraining.css'; // Import custom CSS for styling

function PersonalTraining() {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="justify-content-center mt-5">
  <Col md={8} lg={6}>
    <Card className="hero-card shadow-lg border-0">
      <Card.Img
        variant="top"
        src="/gym.png"
        alt="Personal Training"
        className="card-img rounded-top"
      />
      <Card.Body className="text-center p-4">
        <Card.Title className="card-title text-primary fw-bold fs-4">
          Personal Training
        </Card.Title>
        <Card.Text className="card-text text-muted fs-5">
          Achieve your fitness goals with our personalized training sessions, 
          tailored to meet your specific needs and led by certified trainers.
        </Card.Text>
        <Button
          variant="primary"
          size="lg"
          as={Link}
          to="/contact-us"
          className="book-session-btn px-4 py-2"
        >
          Book a Session
        </Button>
      </Card.Body>
    </Card>
  </Col>
</Row>


     {/* Benefits Section */}
<Row className="mt-5">
  <Col>
    <h3 className="section-title text-center">Benefits of Personal Training</h3>
    <ListGroup as="ul" className="benefits-list shadow-lg">
      {[
        { icon: "📋", title: "Customized Workout Plans", description: "Receive a program designed specifically for your fitness level and goals." },
        { icon: "🔥", title: "Motivation & Accountability", description: "Our trainers will keep you motivated and accountable for every session." },
        { icon: "💪", title: "Enhanced Techniques", description: "Learn proper form and techniques to maximize results and prevent injury." },
        { icon: "⏰", title: "Flexible Scheduling", description: "Book sessions that work with your schedule, whether it's early morning or late evening." },
      ].map((benefit, index) => (
        <ListGroup.Item as="li" className="benefit-item d-flex align-items-start" key={index}>
          <span className="benefit-icon me-3">{benefit.icon}</span>
          <div>
            <strong>{benefit.title}:</strong> {benefit.description}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Col>
</Row>

{/* Training Program Section */}
<Row className="mt-5">
  <Col md={6}>
    <h3 className="section-title text-center">Our Personal Training Program</h3>
    <Card className="program-card shadow-lg">
      <Card.Body>
        <ul className="program-list">
          {["Weight Loss and Management", "Strength and Muscle Building", "Flexibility and Mobility", "Cardio and Endurance", "Posture Improvement and Injury Prevention"].map((item, index) => (
            <li key={index} className="program-item">
              <span className="program-icon">✔️</span> {item}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  </Col>

  <Col md={6}>
    <h3 className="section-title text-center">Training Schedule</h3>
    <Table bordered hover className="schedule-table shadow-lg">
      <thead>
        <tr className="table-header">
          <th>Shift</th>
          <th>Days</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {[
          { shift: "Morning", days: "Monday - Friday", time: "5:00 AM - 10:00 AM" },
          { shift: "Evening", days: "Monday - Friday", time: "5:00 PM - 10:00 PM" },
          { shift: "Saturday", days: "All Day", time: "5:00 AM - 10:00 AM / 5:00 PM - 10:00 PM" },
        ].map((schedule, index) => (
          <tr key={index}>
            <td>{schedule.shift}</td>
            <td>{schedule.days}</td>
            <td>{schedule.time}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Col>
</Row>


      {/* Trainers Section */}
      <Row className="mt-5">
        <Col>
          <h3 className="section-title text-center">Meet Our Trainers</h3>
          <Row>
            {['Jamshed', 'Arjun', 'Mahendra'].map((trainer, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="trainer-card shadow-sm">
                  <Card.Img variant="top" src={`/trainer${index + 1}.png`} alt={trainer} />
                  <Card.Body className="trainer-card-body text-center">
                    <Card.Title>{trainer}</Card.Title>
                    <Card.Text>
                      Specialist in {index === 0 ? 'Strength' : index === 1 ? 'Mobility' : 'Yoga'}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalTraining;
