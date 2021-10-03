import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogFood = (props) => {
    const { img, title, category } = props.food;
    return (
      <Col>
        <Card>
          <div className="category-card">
            <Card.Img
              className="category-img"
              height="300px"
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              possimus laboriosam optio sunt debitis praesentium cumque quae
              officiis cum accusamus quaerat incidunt nemo non ducimus
              cupiditate, doloremque dolor commodi. Vitae!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default BlogFood;