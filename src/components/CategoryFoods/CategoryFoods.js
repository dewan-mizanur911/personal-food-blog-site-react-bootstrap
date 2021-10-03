import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CategoryFoods.css'

const CategoryFoods = (props) => {
    const { image } = props;
    const { img, name } = image;
    return (
      <Col>
        <Card>
          <div className="category-card">
          <Card.Img className="category-img" height="300px" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CategoryFoods;