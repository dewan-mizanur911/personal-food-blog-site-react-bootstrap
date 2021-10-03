import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
      <Container fluid className="subscribe-container my-5">
        <Row className="h-100">
          <Col md={6} className="text-start text-white h-100">
              <div className="d-flex flex-column justify-content-center h-100">
                    <h1>Subscribe to our Cooking Channel</h1>
                    <p>
                    Fusce id velit placerat, efficitur libero placerat, sodales ante.
                    Curabitur sed erosat orci congue vestibulum.
                    </p>
                    <Button className="rounded-pill btn-subscribe fw-bold" size="lg">
                    Subscribe
                    </Button>{" "}
              </div>

          </Col>
        </Row>
      </Container>
    );
};

export default Subscribe;