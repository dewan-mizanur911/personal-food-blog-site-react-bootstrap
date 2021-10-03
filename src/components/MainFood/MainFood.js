import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './MainFood.css';

const MainFood = (props) => {
    const { img, title } = props.food;
    return (
      <Col>
        <Card>
          <div className="category-card">
            <Card.Img
              className="category-img"
              height="200px"
              variant="top"
              src={img}
            />
            <h4 className="food-title fw-bold text-white">{title}</h4>
          </div>
        </Card>
      </Col>
    );
};

export default MainFood;