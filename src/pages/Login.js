import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/");
        alert("Sesión iniciada correctamente");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          alert("Credenciales incorrectas");
        }
      });
  };
  return (
    <div>
      <Card style={{ maxWidth: "500px" }} className="mx-auto mt-5">
        <Card.Body>
          <h1>Login
</h1>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Test data</Form.Label><br/>
            <Form.Label>Email: mason@gmail.com</Form.Label><br/>
            <Form.Label>Password: mason1234</Form.Label><br/>
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
  
};

export default Login;