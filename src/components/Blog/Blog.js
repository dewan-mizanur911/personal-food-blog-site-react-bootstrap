import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogFood from '../BlogFood/BlogFood';
import './Blog.css';

const Blog = () => {
    const foods = [
      {
        id: 1,
        title: "Allergens to Watch Out For",
        category: "Allergens, Dinner",
        img: "https://images.pexels.com/photos/4551971/pexels-photo-4551971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 2,
        title: "15 Vegan Roast Alternatives",
        category: "Cook, Dinner",
        img: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 3,
        title: "Why your Tools are So",
        category: "Kitchen, Tools",
        img: "https://images.pexels.com/photos/7315016/pexels-photo-7315016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 4,
        title: "Cafe Restaurant Relax",
        category: "Restaurant, Vegan",
        img: "https://images.pexels.com/photos/5491045/pexels-photo-5491045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ];
    return (
      <Container fluid className="p-3 my-5">
        <h1 className="fw-bold">From The Blog</h1>
        <p>
          Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
          officia deserunmollit anim id est laborum.
        </p>
        <Row xs={1} md={2} className="g-2 mt-5">
          <BlogDetails></BlogDetails>
          <Col md={8}>
            <Row xs={1} md={2} className="g-4">
              {foods.map((food) => (
                <BlogFood key={food.id} food={food}></BlogFood>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
};

export default Blog;