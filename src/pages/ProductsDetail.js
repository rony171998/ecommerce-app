import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterCategory } from "../store/slices/products.slice";
import { Button, Card, Col, Form, ListGroup, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ProductsDetail = () => {
    const [product, setProducts] = useState({});
    const [quantitiesproduct, setQuantitiesProducts] = useState(1);

    const { handleSubmit } = useForm();

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


    const subtractQuantitiesProduc = () => {
        if (quantitiesproduct > 1) {
            setQuantitiesProducts(quantitiesproduct - 1)
        }
    }
    const addQuantitiesProduc = () => {
        setQuantitiesProducts(quantitiesproduct + 1)
    }

    const submit = () => {
        const data = {id, quantity: quantitiesproduct}
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", data ,getConfig())
            .then((res) => {
                console.log(res.data);
                alert("Agregado al carrito");
            })
            .catch((error) => {
                console.log(error.response.data);
                if (error.response.status === 401) {
                    alert("error " + error.response.menssage);
                }
            });
    };

    const getConfig = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });


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
                                <ToggleButton id="toggle-check" onClick={() => setValue(1)}
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
                            <Form onSubmit={handleSubmit(submit)}>
                                <Form.Group controlId="formBasicQuantity">
                                    <Form.Label>Quantity: {quantitiesproduct}</Form.Label>
                                </Form.Group>

                                <Button onClick={subtractQuantitiesProduc}>-</Button>

                                <Button onClick={addQuantitiesProduc}>+</Button><br />
                                <Button type="submit" >Add Cart</Button>
                            </Form>

                        </Col>
                    </Row>


                </ListGroup.Item>

            </Card>

        </div >
    );
};

export default ProductsDetail;