import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
    return (
      <Col md={3} className="text-white">
        <div
          className="text-start blog-details rounded p-5"
          style={{ width: "300px" }}
        >
          <h1>Categories</h1>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Resturant</h2>
            <p>3 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Events</h2>
            <p>5 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Kitchen</h2>
            <p>5 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Life Cycle</h2>
            <p>3 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Reviews</h2>
            <p>2 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Cuisine</h2>
            <p>2 Posts</p>
          </NavLink>
          <NavLink to="/nani" className="text-white nav-link">
            <h2>Soup</h2>
            <p>1 Posts</p>
          </NavLink>
        </div>
      </Col>
    );
};

export default BlogDetails;