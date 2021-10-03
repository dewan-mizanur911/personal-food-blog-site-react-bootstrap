import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MainFood from '../MainFood/MainFood';
import './Main.css';

const Main = () => {
    const foods = [
      {
        img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Beef Massaman Soup Marroc",
        id: 3,
      },
      {
        img: "https://images.pexels.com/photos/3596691/pexels-photo-3596691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Italian Tiramisu Vero Perro",
        id: 1,
      },
      {
        img: "https://images.pexels.com/photos/4559174/pexels-photo-4559174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Southern Fried Cabbage with",
        id: 2,
      },
    ];
    return (
      <Container fluid className="my-5">
        <h1 className="fw-bold">Main Course</h1>
        <p>
          Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
          officia deserunmollit anim id est laborum.
        </p>
        <Row className="my-3 g-4">
            {
                foods.map(food => <MainFood key={food.id} food={food}></MainFood>)
            }
        </Row>
      </Container>
    );
};

export default Main;