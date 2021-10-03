import './MealDetails.css';
import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useMeals from '../../hooks/meals';

const MealDetails = () => {
    const { idMeal } = useParams();
    const [meals] = useMeals();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const mealDb = meals.find(meal => meal.idMeal === idMeal);
        setMeal(mealDb);
    }, []);

    

    return (
      <Container>
        <Card>
                {
                    meal?.length &&
             <>   <Card.Img height="300" variant="top" src={meal.strMealThumb} />
           <Card.Body>
             <Card.Title>{meal.strMeal}</Card.Title>
             <Card.Text>{meal.strInstructions}</Card.Text>
             <Button variant="primary">Primary</Button>{" "}
           </Card.Body></>
            }

        </Card>
      </Container>
    );
};

export default MealDetails;