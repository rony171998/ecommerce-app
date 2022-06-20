import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const User = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    };

    const dispatch = useDispatch();

    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get("https://ecommerce-api-react.herokuapp.com/api/v1/users/login")
            .then(res => setUser(res.data.data));
    }, [dispatch]);

    console.log(user);

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <h1>Welcome {user.name}</h1>
                </Card.Title>
                <Card.Text>{localStorage.getItem("Name")}</Card.Text>
                <Button onClick={logout}>Log out</Button>
            </Card.Body>
        </Card>
    );
};

export default User;
