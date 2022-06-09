import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory } from "../store/slices/products.slice";
import { Button, Card, Col, InputGroup, ListGroup, Row } from 'react-bootstrap';

const ProductsDetail = () => {
    const [product, setProducts] = useState({});

    const { id } = useParams();
    const dispatch = useDispatch();

    const productsList = useSelector((state) => state.products);

    useEffect(() => {
        // axios.get(`https://products-app-academlo.herokuapp.com/products/${id}/`)
        //     .then(res => {
        //         setproducts(res.data);
        //         dispatch(filterCategory(res.data.category.id));
        //     });
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products").then((res) => {
            const productsSearched = res.data.data.products.find(
                (productsItem) => productsItem.id === Number(id)
            );
            setProducts(productsSearched);
            dispatch(filterCategory(res.data.data.products.id));
        });
    }, [dispatch, id]);

    console.log(product);

    return (
        <div>

            <Card>
                <ListGroup.Item key={product.id}>

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
                <Card.Text>{product.category?.name}</Card.Text>

                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button>Add Cart</Button>


            </ListGroup.Item>
            </Card>
            


        </div >
    );
};

export default ProductsDetail;