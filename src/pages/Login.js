import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {

  const { register, handleSubmit } = useForm();


  const submit = (data) => {
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token)
        localStorage.setItem("user", data.email);
        alert("Sesión iniciada correctamente");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          alert("Credenciales incorrectas");
        }
        if (error.response.status === 404) {
          alert("No existe el usuario");
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
              <Form.Label>Test data</Form.Label><br />
              <Form.Label>Email: rony171998@gmail.com</Form.Label><br />
              <Form.Label>Password: 123456789</Form.Label><br />
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
              Login
            </Button><br />
            <Form.Label>Don't have an account? </Form.Label>
            <a href="#/signin"> Sign Up</a>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );

};

export default Login;