import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, filterProductsByName, getProducts } from '../store/slices/products.slice';


const Favorites = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [ search, setSearch ] = useState("");

    let products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());

    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res => setCategories(res.data.data))

      
  }, [dispatch]);

  const selectCategory = (id) => {
    dispatch(filterCategory(id))
  }

  const searchProduct = (id) => {
    dispatch(filterProductsByName(id))
  }
   
  return (
    <div>
      <Row >

        <Col lg={3}>
          <h2>Categories</h2>
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
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => searchProduct(search)}>
              Search
            </Button>
          </InputGroup>

          <ListGroup>
            <Row xs={1} md={2} lg={3} >
              {
                products?.map(product => (
                  <Col key={product.id}>
                    <ListGroup.Item >
                      <Card.Title>{product.title}</Card.Title>
                      <ListGroup style={{ width: "260px", height: "350px" }}>

                        <Row style={{ cursor: "pointer" }} onClick={() => navigate(`/products/${product.id}`)}>
                          <Col>
                            <Card.Img src={product.productImgs?.[0]} style={{ width: "260px", height: "250px" }} />
                          </Col>
                        </Row>

                        <Card.Footer>Price ${product.price} USD</Card.Footer>
                        <Button variant="primary" size="sm">Add Cart</Button>

                      </ListGroup>
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

export default Favorites;
