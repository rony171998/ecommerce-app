import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterCategory } from "../store/slices/products.slice";
import { Button, Card, Col, ListGroup, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const ProductsDetail = () => {
    const [product, setProducts] = useState({});

    const { id } = useParams();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products").then((res) => {
            const productsSearched = res.data.data.products.find(
                (productsItem) => productsItem.id === Number(id)
            );
            setProducts(productsSearched);
            dispatch(filterCategory(res.data.data.products.id));
        });
    }, [dispatch, id]);

    

    

    return (
        <div>

            <Card>
                <ListGroup.Item key={product.id}>
     
                        <Row>
                            <Col>
                                <Card.Img 
                                src={product.productImgs?.[value]} 
                                style={{ maxwidth: "560px", maxHeight: "550px" }}>

                                </Card.Img>
                                <ToggleButtonGroup type="checkbox" value={value} >
                                    <ToggleButton id="toggle-check" onClick={() => setValue(0)}
                                        type="checkbox" value={1}> 
                                        Photo 1
                                    </ToggleButton>
                                    <ToggleButton id="toggle-check" onClick={ () => setValue(1)}
                                        type="checkbox" value={2}>
                                        Photo 2
                                    </ToggleButton>
                                    <ToggleButton id="toggle-check" onClick={() => setValue(2)}
                                        type="checkbox" value={3}>
                                        Photo 3
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                            <Col>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Category: {product.category?.name}</Card.Text>

                                <Card.Text>Description: {product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button>Add Cart</Button>
                            </Col>
                        </Row>

                  
                </ListGroup.Item>
                
            </Card>

        </div >
    );
};

export default ProductsDetail;