import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        alert("Registrado correctamente");
        console.log(data)
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };
    return (
        <div>
          <Card style={{ maxWidth: "500px" }} className="mx-auto mt-5">
            <Card.Body>
              <h1>Sign Up 
              </h1>
              <Form onSubmit={handleSubmit(submit)}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    {...register("firstName")}
                    type="text"
                    placeholder="Enter firstName"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control
                    {...register("lastName")}
                    type="text"
                    placeholder="Enter lastName"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    {...register("email")}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password (10 characters)</Form.Label>
                  <Form.Control
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control 
                  type="password"
                  placeholder="Repeat Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone (10 characters)</Form.Label>
                  <Form.Control
                    {...register("phone")}
                    type="Number"
                    placeholder="Enter phone"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    {...register("role")}
                    type="text"
                    placeholder="Enter role"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={ () => navigate("/login")}>Sign up</Button>
                <br/><Form.Label>Already have an account? </Form.Label>
                <a href="#/login"> Log in</a>
              </Form>
            </Card.Body>
          </Card>
        </div>
    );
};

export default SignIn;