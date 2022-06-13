import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const Purchases = () => {

    const [purchases, setPurchases] = useState({});

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig()).then((res) => {
            setPurchases(res.data.data);
        });
    }, []);

    const getConfig = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    console.log(purchases.cart?.products);


    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title>Purchases</Card.Title>
                </Card.Header>
            </Card>
            <ListGroup>
                {
                    purchases.cart?.products.map((purchaseItem) => (
                        <Row key={purchaseItem.id}>
                            <Col>{purchaseItem.title}</Col>
                            <Col>{purchaseItem.productsInCart?.quantity}</Col>
                            <Col>$ {purchaseItem.price}</Col>
                            <Col>$ {purchaseItem.productsInCart?.quantity * purchaseItem.price}</Col>

                        </Row>
                        
                    ))
                }
            </ListGroup>
            
            
        </div >
    );
};

export default Purchases;