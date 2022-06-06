import React from "react";
import { Button, Card,Container, FormControl, InputGroup, ListGroup, ListGroupItem} from 'react-bootstrap';

const Login = () => {
  return (
    <Container>
      
        <ListGroup className="mt-5">
          <ListGroupItem className="mt-3">
            <Card.Title>Login</Card.Title>
            <ListGroupItem className="m-3">
              <Card.Text>Text Data</Card.Text>
              <Card.Text>mason@gmail.com</Card.Text>
              <Card.Text className="mb-5">mason1234</Card.Text>
            </ListGroupItem>
          
          <InputGroup className="mb-3">Email 
            
          </InputGroup>
          <FormControl />
          <InputGroup className="mb-3">Password 
            
          </InputGroup>
          <FormControl className="mb-3"/>
          <Button className="mb-5">Login</Button>
          </ListGroupItem>
          
        </ListGroup>

    </Container>

  );
};

export default Login;