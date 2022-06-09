import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getProducts } from '../store/slices/products.slice';


const Favorites = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());

    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res => setCategories(res.data.data))
  }, []);
  console.log(categories)

  const selectCategory = (id) => {
    dispatch(filterCategory(id))
}

  return (
    <div>
      <Row>

        <Col lg={3} className="mb-4">
          <h4>Categories</h4>
          <ListGroup>
            
            {
              categories.categories?.map(category => (
                
                <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)}>
                  {category.name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
        <Col>
          <InputGroup className="mb-4 mt-4">
            <FormControl
              placeholder="Search products"
            />
            <Button variant="outline-secondary" id="button-addon2" >
              Button
            </Button>
          </InputGroup>

          <ListGroup>
            <Row xs={1} md={2} lg={3} className="g-4">
              {
              products.map(product => (
                <Col key={product.id}>
                  <ListGroup.Item style={{ cursor: "pointer" }} onClick={() => navigate(`/products/${product.id}`)}>

                    <ListGroup>
                      <Row>
                        {
                        product.productImgs?.map(productItem => (
                          <Col key={productItem}>
                            <Card >
                              <Card.Img src={productItem} alt="" />
                            </Card>
                          </Col>
                        ))
                      }
                      </Row>
                      
                    </ListGroup>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text> ${product.price} {product.status}</Card.Text>

                  </ListGroup.Item>
                </Col>
                
              ))
            }
            </Row>
            
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
