import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './TermsAndPolicy.css';

function TermsAndPolicy() {
  return (
    <Container className="terms-policy-container my-5">
      <Card className="shadow-lg">
        <Card.Header as="h1" className="text-center bg-primary text-white">
          Terms and Policy
        </Card.Header>
        <Card.Body>
          <p className="lead text-center mb-4">
            Please read the following terms and policies carefully.
          </p>

          <ListGroup variant="flush">
            <ListGroup.Item className="list-item">
              <h4>1. Membership Terms</h4>
              <p>
                Membership is non-transferable and non-refundable. Members are required to follow all gym rules and guidelines.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>2. Privacy Policy</h4>
              <p>
                We respect your privacy. Any personal information you provide will be used solely for membership and service purposes.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>3. Liability Waiver</h4>
              <p>
                The gym is not responsible for any injuries or loss of personal belongings. Members are encouraged to use lockers.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>4. Cancellation Policy</h4>
              <p>
                Membership cancellations require a 30-day notice. Any remaining dues must be cleared before cancellation.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>5. Code of Conduct</h4>
              <p>
                Members are expected to respect staff, trainers, and fellow members. Misconduct may result in termination of membership.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>6. Equipment Usage</h4>
              <p>
                Members must use gym equipment responsibly and return it to its designated place after use. Damaged equipment due to misuse may incur charges.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>7. Health and Safety</h4>
              <p>
                Members are advised to consult a physician before starting any fitness program. The gym reserves the right to deny access to individuals with visible injuries or illnesses for safety reasons.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>8. Suspension of Services</h4>
              <p>
                The gym reserves the right to temporarily suspend services for maintenance, repairs, or other operational needs. Members will be notified in advance whenever possible.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              <h4>9. Age Restrictions</h4>
              <p>
                The minimum age to join the gym is 16 years. Minors under the age of 18 require parental or guardian consent to become members.
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TermsAndPolicy;
