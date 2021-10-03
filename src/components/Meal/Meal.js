import './Meal.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
             {
                 strInstructions.slice(0,200)
             }
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Meal;