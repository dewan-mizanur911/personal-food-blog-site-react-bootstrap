import './About.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about.jpg';

const About = () => {
    return (
      <Container className="my-5">
        <Row xs={1} md={2}>
          <Col md={6}>
            <Card border="dark" style={{ width: "28rem" }} className="my-5">
              <Card.Header>Our Story</Card.Header>
              <Card.Body>
                <Card.Text>
                  Interpreter Silvia Broome (Nicole Kidman) is at the United
                  Nations when she overhears what she believes is a plan to
                  assassinate the president of Matobo, Edmond Zuwanie (Earl
                  Cameron). When she alerts the authorities, Secret Service
                  agents Tobin Keller (Sean Penn) and Dot Woods (Catherine
                  Keener) are assigned to the case. It's not long before they
                  decide that Silvia herself is a suspect, having formerly been
                  involved with both a guerrilla group in Matobo and the
                  president's chief opponent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={about} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default About;