import React, { useContext } from 'react';
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { TodosContext } from '../../App';


const Carousel = () => {
  const searched = useContext(TodosContext);
  const { handleOnSearch } = searched;
  const handleSearch = (event) => {
    handleOnSearch(event.target.value);
  }
    return (
      <Container>
        <Row className="pb-5">
          <Col xs={12} md={6} className="text-white py-5 mb-5">
            <h1>
              <i>It is even better than an expensive cookery book</i>
            </h1>
            <p>Learn how to make your favorite restaurant’s dishes</p>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange= {handleSearch}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default Carousel;