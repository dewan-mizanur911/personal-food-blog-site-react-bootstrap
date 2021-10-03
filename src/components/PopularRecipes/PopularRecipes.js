import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PopularFood from '../PopularFood/PopularFood';
import './PopularRecipes.css';

const PopularRecipes = () => {
    const foods = [
      {
        author: "James Wood",
        img: "https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 1
      },
      {
        author: "Ducken mett",
        img: "https://images.pexels.com/photos/1618955/pexels-photo-1618955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 2
      },
      {
        author: "Chris Gayle",
        img: "https://images.pexels.com/photos/775863/pexels-photo-775863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 3
      },
      {
        author: "Parvin",
        img: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 4
      },
    ];
    return (
      <div className="my-5">
        <h1 className="fw-bold">Most Popular Recipes</h1>
        <p>
          Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
          officia deserunmollit anim id est laborum.
        </p>
        <Container fluid>
          <Row xs={1} md={3} lg={4} className="g-4 mb-5 mt-3">
            {foods.map((food) => (
              <PopularFood key={food.id} food={food}></PopularFood>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default PopularRecipes;