import React, { useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { DelProductsToCart ,getCarts } from "../store/slices/products.slice";

const Cart = () => {

    const dispatch = useDispatch();

    let cart = useSelector(state => state.products);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);


    const removeItem = (id) => {
        dispatch(DelProductsToCart(id));
        dispatch(getCarts());
    }

    //console.log(cart);

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

                            <tr className="table-light " key={cartItem.id} >

                                <td >{cartItem.title}</td>
                                <td >{cartItem.productsInCart?.quantity}</td>
                                <td>$ {cartItem.price}</td>
                                <td>$ {cartItem.productsInCart?.quantity * cartItem.price}.00
                                </td>
                                
                                <Button variant="primary" onClick={() => removeItem(cartItem.id)}>Delete</Button>

                            </tr>

                        ))

                    }


                </tbody>

                <Button onClick={() => navigate("/cart/formdata")}>Chekout</Button>
            </table>
            }


        </div >
    );
};

export default Cart;