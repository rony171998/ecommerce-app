import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

const Purchases = () => {

    const [purchases, setPurchases] = useState({});
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig()).then((res) => {
            setPurchases(res.data);
        });
    }, []);

    const getConfig = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    const getValorTotal = (price) => {
        setValorTotal(valorTotal + price);
    }

    //console.log(purchases);

    return (
        <div>

            <Card className="mt-3">
                <Card.Header>
                    <Card.Title>Purchases</Card.Title>
                </Card.Header>
            </Card>

            <table className="table table-hover">

                <thead>

                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Price</th>
                    </tr>

                </thead>
                {

                    purchases.data?.purchases.map((purchaseItem) => (

                        <tbody key={purchaseItem.id}>

                            {
                                purchaseItem > 20 ?

                                <tr>
                                    <td>Total $ {purchaseItem.id}</td>
                                </tr>

                                :

                                purchaseItem.cart?.products.map((purchaseItem) => (

                                    <tr className="table-light" key={purchaseItem.id} >

                                        <td >{purchaseItem.title}</td>
                                        <td >{purchaseItem.productsInCart?.quantity}</td>
                                        <td>$ {purchaseItem.price}</td>
                                        <td>$ {purchaseItem.productsInCart?.quantity * purchaseItem.price}.00
                                        </td>
                                        {
                                            () => getValorTotal(purchaseItem.productsInCart.quantity * purchaseItem.price)
                                        }

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

                    ))
                }

            </table>

        </div >
    );
};

export default Purchases;