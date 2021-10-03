import React from 'react';
import './Category.css';
import CategoryFoods from '../CategoryFoods/CategoryFoods';
import { Container, Row } from 'react-bootstrap';

const Category = () => {
    const images = [
      {
            img: "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Burger',
          id: 1
      },
      {
          img: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Cake',
          id: 2
      },
      {
          img: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Drinks',
          id: 3
      },
      {
          img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: 'Pizza',
          id: 4
      },
    ];
    return (
      <div className="my-5">
        <Container className="my-5">
          <h1 className="fw-bold">Recipes By Category</h1>
          <p>
            Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
            officia deserunmollit anim id est laborum.
          </p>
        </Container>
        <Container fluid>
          <Row xs={1} md={3} lg={4} className="g-4">
            {images.map((img) => (
              <CategoryFoods key={img.id} image={img}></CategoryFoods>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Category;