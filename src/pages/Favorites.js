import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';

const Favorites = () => {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res => setCategories(res.data.data))

    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
      .then(res => setProducts(res.data.data.products))
  }, []);
  console.log(products)

  return (
    <div>
      <Row>
        <Card.Title>E-commerce</Card.Title>

        <Col lg={3} className="mb-4">
          <h4>Categories</h4>
          <ListGroup>
            {
              categories.categories?.map(category => (
                <ListGroup.Item key={category.id}>
                  {category.name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search products"
            />
            <Button variant="outline-secondary" id="button-addon2" >
              Button
            </Button>
          </InputGroup>

          <ListGroup>
            {
              products.map(product => (
                <ListGroup.Item key={product.id}>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.category?.name} ${product.price} {product.status}</Card.Text>

                  <ListGroup>
                    {
                      product.productImgs?.map(product => (
                        <Col key={product}>
                          <Card>
                            <Card.Img src={product} alt="" />
                          </Card>
                        </Col>
                      ))
                    }
                  </ListGroup>

                  <Card.Text>{product.description}</Card.Text>
                </ListGroup.Item>
              ))
            }
          </ListGroup>

        </Col>
      </Row>
    </div>
  );
};
/*
                <Card.Title>User</Card.Title>
                <Card.Text>{product.user.firstName} {product.user.lastName}</Card.Text>
                <Card.Text>{product.user.email}</Card.Text>
                <Card.Text>{product.user.phone}</Card.Text>
                <Card.Text>{product.user.role}</Card.Text>
                <Card.Text>{product.user.status}</Card.Text>
*/

export default Favorites;
