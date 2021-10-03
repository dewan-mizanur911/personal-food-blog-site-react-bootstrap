import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TodosContext } from '../../App';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
      const searchedItems = useContext(TodosContext);
      const { searched } = searchedItems;
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=f')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setSearch(data.meals)
            });
    }, []);
    const [search, setSearch] = useState("");
    useEffect(() => {
      const newMeals = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searched.toLowerCase())
      );
      setSearch(newMeals);
    }, [searched]);

    return (
      <Container fluid>
        <h2 className="fw-bold my-5">Meals</h2>
        <Row xs={1} md={3} className="g-4">
          {
            search.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
          }
        </Row>
      </Container>
    );
};

export default Meals;