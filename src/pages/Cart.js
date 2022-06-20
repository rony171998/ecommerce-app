import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DelProductsToCart} from "../store/slices/products.slice";

const Cart = () => {

    const dispatch = useDispatch();

    const [cart, setCart] = useState({});
    const [valorTotal, setValorTotal] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then((res) => {
            setCart(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const getConfig = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    const getValorTotal = (price) => {
        setValorTotal(valorTotal + price);
    }

    const removeItem = (id) => {
        dispatch(DelProductsToCart(id));
    }

    console.log(cart);

    return (
        <div>
            <Card className="mt-3">
                <Card.Header>
                    <Card.Title>Cart</Card.Title>
                </Card.Header>
            </Card>
            
            {
                Object.entries(cart).length === 0 ?
                    <h1>Not Fount Producs</h1>
                    :
                    <table className="table table-hover">

                <thead>

                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Price</th>
                    </tr>

                </thead>

                <tbody >
                    {
                        cart.cart?.products.map((cartItem) => (

                            <tr className="table-light" key={cartItem.id} >

                                <td >{cartItem.title}</td>
                                <td >{cartItem.productsInCart?.quantity}</td>
                                <td>$ {cartItem.price}</td>
                                <td>$ {cartItem.productsInCart?.quantity * cartItem.price}.00
                                </td>
                                {
                                    () => getValorTotal(cartItem.productsInCart.quantity * cartItem.price)
                                }
                                <Button variant="primary" onClick={() => removeItem(cartItem.id)}>Delete</Button>

                            </tr>

                        ))

                    }

                    <tr>

                        <td>Total </td>
                        <td></td>
                        <td></td>
                        <td>$ {valorTotal}</td>

                    </tr>

                </tbody>

                <Button onClick={() => navigate("/cart/formdata")}>Chekout</Button>
            </table>
            }

            


        </div >
    );
};

export default Cart;