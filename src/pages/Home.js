import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    Col,
    FormControl,
    InputGroup,
    ListGroup,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, filterProductsByName, filterProductsByPrices, getProducts ,addProductsToCart ,pachProductsToCart} from "../store/slices/products.slice";
import { Weather } from "../components";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [priceRangeMin, setPriceRangeMin] = useState(0);
    const [priceRangeMax, setPriceRangeMax] = useState(1000);
    const [quantity, setQuantity] = useState(1);

    let products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());

        axios
            .get(
                "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
            )
            .then(res => setCategories(res.data.data));
    }, [dispatch]);

    const selectCategory = id => {
        dispatch(filterCategory(id));
    };

    const searchProduct = id => {
        dispatch(filterProductsByName(id));
    };

    const searchProductByPrices =( priceRangeMin , priceRangeMax )=> {
      dispatch(filterProductsByPrices(priceRangeMin, priceRangeMax));
      console.log(priceRangeMin, priceRangeMax);
    } 

    const addToCard = (id) => {
        setQuantity(quantity + 1);
        if (quantity === 1) {
            console.log(quantity);
            dispatch(addProductsToCart(id, quantity));
        }else{
            console.log(quantity);
            dispatch(pachProductsToCart(id, quantity));
        }
        
    }

    console.log(products)
    return (
        <div>
            <Row>
                <Col lg={3} className="mb-3">
                    
                    <ListGroup className="mb-3 mt-3">
                        <Card.Header>Categories</Card.Header>
                        {categories.categories?.map(category => (
                            <ListGroup.Item
                                action
                                key={category.id}
                                onClick={() => selectCategory(category.id)}
                            >
                                {category.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup >
                    
                    <ListGroup className="mb-3">
                        <Card.Header>Rango de precios</Card.Header>

                        <ListGroup.Item >
                            

                            <InputGroup className="mb-3">
                              <FormControl
                              placeholder="Precio mínimo"
                              onChange={e => setPriceRangeMin(e.target.value)}
                              value={priceRangeMin }
                              />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <FormControl
                                placeholder="Precio Limite"
                                onChange={e => setPriceRangeMax(e.target.value)}
                                value={priceRangeMax }
                              />
                            </InputGroup>

                            <Button variant="primary" 
                              id="button-addon2"
                              onClick={() => searchProductByPrices(priceRangeMin, priceRangeMax)}>
                              Filtrar Precio
                            </Button>

                        </ListGroup.Item>

                    </ListGroup>
                  
                    <Weather/>

                </Col>
                <Col>
                    <InputGroup className="mb-2 mt-3">
                        <FormControl
                            placeholder="Search products"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                        <Button
                            variant="outline-secondary"
                            id="button-addon2"
                            onClick={() => searchProduct(search)}>
                            Search
                        </Button>

                    </InputGroup>

                    <ListGroup>
                        <Row xs={1} md={2} lg={3}>
                            {products.length === 0 ? (
                                
                              <ListGroup.Item>Not Fount Product</ListGroup.Item>
                                
                            ) : (
                                products?.map(product => (
                                    <Col key={product.id}>
                                        <ListGroup.Item>
                                            <Card.Title>
                                                {product.title}
                                            </Card.Title>
                                            <ListGroup
                                                style={{
                                                    width: "260px",
                                                    height: "350px",
                                                }}
                                            >
                                                <Row
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        navigate(
                                                            `/products/${product.id}`
                                                        )
                                                    }
                                                >
                                                    <Col>
                                                        <Card.Img
                                                            src={
                                                                product
                                                                    .productImgs?.[0]
                                                            }
                                                            style={{
                                                                width: "260px",
                                                                height: "250px",
                                                                objectFit:
                                                                    "contain",
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Card.Footer>
                                                    Price ${product.price} USD
                                                </Card.Footer>
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    onClick={() =>
                                                        addToCard(product.id)
                                                    }
                                                >
                                                    Add Cart
                                                </Button>
                                            </ListGroup>
                                        </ListGroup.Item>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
