import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUs.css'; // Add custom CSS for more styling

function AboutUs() {
  return (
    <Container className="about-us-container py-5">
      <h2 className="text-center mb-4">Our Programs</h2>
      <p className="text-center mb-5">
        Explore our training programs tailored for all fitness levels, along with flexible shift options to suit your schedule.
      </p>

      {/* <Row className="justify-content-center mb-5">
        <Col md={8} lg={6}>
          <Card className="hero-card shadow-lg border-0">
          <Card.Img
  variant="top"
  src="/founder.png"
  alt="Founder of TimeFitness Club"
  className="founder-image"
/>

            <Card.Body className="text-center p-4">
              <Card.Title className="card-title text-primary fw-bold fs-4">
                Haider Khan
              </Card.Title>
              <Card.Text className="card-text text-muted fs-5">
                Founder and Visionary of TimeFitness Club
              </Card.Text>
              <Card.Text>
                With a mission to promote health and fitness, Haider Khan established TimeFitness Club to create a community where fitness is not a choice but a lifestyle.
              </Card.Text>
              <Button
                variant="primary"
                size="lg"
                as={Button}
                href="/contact-us"
                className="px-4 py-2"
              >
                Connect with Us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* Gym Timetable */}
      <section className="gym-timetable mb-5">
  <h3 className="text-center mb-3">Gym Timetable</h3>
  <p className="text-center mb-4">We offer flexible shift timings so you can find the perfect time for your workout.</p>
  <table className="table table-bordered timetable-table mx-auto" style={{ maxWidth: "800px" }}>
    <thead>
      <tr>
        <th>Day</th>
        <th>Morning Shift</th>
        <th>Evening Shift</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday - Friday</td>
        <td>5:00 AM - 10:00 AM</td>
        <td>5:00 PM - 10:00 PM</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>5:00 AM - 10:00 AM</td>  {/* Updated morning shift for Saturday */}
        <td>5:00 PM - 10:00 PM</td>  {/* Updated evening shift for Saturday */}
      </tr>
      <tr>
        <td>Sunday</td>
        <td colSpan="2">Closed</td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="trainers mb-5">
        <h3 className="text-center">Our Trainers</h3>
        <p className="text-center mb-5">
          At TimeFitness Club, we take pride in our team of certified trainers who are dedicated to helping you achieve your fitness goals.
        </p>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="trainer-card mb-4">
              <Card.Body>
                <Card.Title>Jamshed</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Strength and Conditioning Specialist</Card.Subtitle>
                <Card.Text>
                  With over 10 years of experience, John is dedicated to helping clients build strength and resilience through targeted programs.
                </Card.Text>
                {/* <Button variant="primary">Learn More</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="trainer-card mb-4">
              <Card.Body>
                <Card.Title>Arjun</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Certified Functional Trainer</Card.Subtitle>
                <Card.Text>
                  Jane focuses on functional training, mobility, and flexibility, helping clients of all levels improve movement and prevent injuries.
                </Card.Text>
                {/* <Button variant="primary">Learn More</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="trainer-card mb-4">
              <Card.Body>
                <Card.Title>Mahendra</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Personal Trainer & Nutrition Coach</Card.Subtitle>
                <Card.Text>
                  Alex combines personalized training with nutritional guidance to support overall wellness and sustainable fitness results.
                </Card.Text>
                {/* <Button variant="primary">Learn More</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="programs py-5">
        <h3 className="text-center text-primary mb-4">Our Programs</h3>
        <p className="text-center mb-5">
          We offer a variety of programs designed to meet the needs of all fitness levels, from beginners to advanced athletes.
        </p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="program-card p-4 text-center bg-light shadow-sm rounded mb-4">
                <i className="fas fa-dumbbell fa-3x mb-3 text-primary"></i>
                <h5 className="program-title mb-3"><strong>Strength Training</strong></h5>
                <p>Build muscle and increase power with our structured strength programs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card p-4 text-center bg-light shadow-sm rounded mb-4">
                <i className="fas fa-running fa-3x mb-3 text-primary"></i>
                <h5 className="program-title mb-3"><strong>Functional Fitness</strong></h5>
                <p>Enhance movement and flexibility to improve daily activities and athletic performance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card p-4 text-center bg-light shadow-sm rounded mb-4">
                <i className="fas fa-user-friends fa-3x mb-3 text-primary"></i>
                <h5 className="program-title mb-3"><strong>Personal Training</strong></h5>
                <p>Work one-on-one with our expert trainers to develop a customized workout plan tailored to your goals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card p-4 text-center bg-light shadow-sm rounded mb-4">
                <i className="fas fa-apple-alt fa-3x mb-3 text-primary"></i>
                <h5 className="program-title mb-3"><strong>Nutritional Guidance</strong></h5>
                <p>Complement your fitness journey with personalized nutrition advice for optimal results.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card p-4 text-center bg-light shadow-sm rounded mb-4">
                <i className="fas fa-yoga fa-3x mb-3 text-primary"></i>
                <h5 className="program-title mb-3"><strong>Yoga and Mobility</strong></h5>
                <p>Join our yoga sessions to improve flexibility, reduce stress, and promote overall wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AboutUs;
