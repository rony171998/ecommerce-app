import React from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import { filterCategory } from "../store/slices/products.slice";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const SimilarProducts = ({ IdCategory ,Id  }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(filterCategory(IdCategory)); 
         
    }, [dispatch, IdCategory ]);


    console.log(products);
    return (
        <Card>
            <Card.Header>Similar Products</Card.Header>
            
            <Row>
                {products.length === 0 ? (
                    <ListGroup.Item>Not Fount Product</ListGroup.Item>
                ) : (
                    products?.map(product => (

                        <Col key={product.id}>
                            <ListGroup.Item >
                                <Card.Title>{product.title}</Card.Title>

                                <ListGroup style={{ width: "200px", height: "300px" }}>

                                    <Row  style={{ cursor: "pointer" }}
                                        onClick={() => navigate(`/products/${product.id}`) }>

                                        <Col>
                                            <Card.Img
                                                src={product.productImgs?.[0]}
                                                style={{
                                                    width: "200px",
                                                    height: "200px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Col>

                                    </Row>

                                    <Card.Footer>
                                        Price ${product.price} USD
                                    </Card.Footer>

                                    <Button variant="primary" size="sm">
                                        Add Cart
                                    </Button>

                                </ListGroup>

                            </ListGroup.Item>
                        </Col>
                    ))
                )}
            </Row>
        </Card>
    );
};

export default SimilarProducts;
