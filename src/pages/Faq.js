import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import './FAQ.css';

function FAQ() {
  return (
    <Container className="faq-container my-5">
      <Card className="shadow-lg">
        <Card.Header as="h1" className="text-center bg-primary text-white">
          Frequently Asked Questions
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are your gym timings?</Accordion.Header>
              <Accordion.Body>
                Our gym is open from 5:00 AM to 10:00 PM, seven days a week.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do you offer personal training?</Accordion.Header>
              <Accordion.Body>
                Yes, we have certified personal trainers available. You can book a session through our app or at the reception desk.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What facilities are included in the membership?</Accordion.Header>
              <Accordion.Body>
                Membership includes access to all gym equipment, group classes, locker rooms, and showers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I cancel my membership?</Accordion.Header>
              <Accordion.Body>
                To cancel your membership, please contact our support team via email or visit the front desk.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Are there any discounts for long-term memberships?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer discounts for 6-month and annual memberships. Please inquire at the reception desk for more details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Do you provide diet plans?</Accordion.Header>
              <Accordion.Body>
                Yes, our certified nutritionists can create personalized diet plans to complement your fitness goals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Is there parking available at the gym?</Accordion.Header>
              <Accordion.Body>
                Yes, we have ample parking space available for our members.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Can I bring a guest to the gym?</Accordion.Header>
              <Accordion.Body>
                Yes, you can bring a guest. Please check our guest policy and applicable charges at the reception desk.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>What should I bring to the gym?</Accordion.Header>
              <Accordion.Body>
                You should bring a water bottle, a towel, and proper workout attire. Lockers are available for storing personal belongings.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Do you offer group fitness classes?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer a variety of group fitness classes such as yoga, Zumba, and HIIT. Check our schedule for class timings.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>How do I book a class?</Accordion.Header>
              <Accordion.Body>
                You can book a class through our mobile app or by contacting the front desk.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>Is there a minimum age requirement for gym membership?</Accordion.Header>
              <Accordion.Body>
                Yes, members must be at least 16 years old. Minors need parental consent to join.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>What is your refund policy?</Accordion.Header>
              <Accordion.Body>
                Refunds are subject to our terms and conditions. Please contact our support team for assistance with refunds.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header>Do you have Wi-Fi available?</Accordion.Header>
              <Accordion.Body>
                Yes, free Wi-Fi is available for all our members.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FAQ;
