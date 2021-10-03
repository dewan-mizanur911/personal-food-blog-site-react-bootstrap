import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import './PopularFood.css';

const PopularFood = (props) => {
    const { img, author } = props.food;
    const user = <FontAwesomeIcon icon={faPen} color="blue" />;
    return (
      <Col>
        <Card>
          <div className="category-card">
            <Card.Img
              className="category-img"
              height="300px"
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <small>
                {user} Author : {author}
              </small>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default PopularFood;