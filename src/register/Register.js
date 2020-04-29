import React from 'react';
import './Register.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import Parse from "parse";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLoading: false,
      usernameError: false,
      passwordError: false,
      emailError: false,
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeHandler = event => {
    const name = event.target.getAttribute('id');
    const value = event.target.value;
    console.log(value)
    if (!value || value === "") {
      this.setState({
        [`${name}Error`]: true
      })
    } else {
      this.setState({
        [`${name}Error`]: false,
        [name]: value
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);
    user.set("email", this.state.email);

    try {
      await user.signUp();
      alert("User created!");
      this.props.history.push("/")
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }

  }

  render() {

    return (
      <section id="register">
        <Container>
          <Row>
            <h1>Sign Up</h1>
          </Row>
          <Row className={"box-form"}>
            <Col>
              <Form onSubmit={this.handleSubmit} className={"formLogin"}>
                <Form.Group>
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <Form.Control
                    required
                    id="username"
                    type="text"
                    onChange={this.changeHandler}
                  />
                  <Form.Control.Feedback className={this.state.usernameError ? "displayErrors" : 'noError'}>Username is required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    required
                    id="email"
                    type="email"
                    onChange={this.changeHandler}
                  />
                  <Form.Control.Feedback className={this.state.emailError ? "displayErrors" : 'noError'}>Email is required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    required
                    id="password"
                    type="password"
                    onChange={this.changeHandler}
                  />
                  <Form.Control.Feedback className={this.state.passwordError ? "displayErrors" : 'noError'}>Password is required</Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                  <Button type="submit" className={"btn btn-primary"} disabled={( (!this.state.username || !this.state.password || !this.state.email) ? true : false) ? true : false }>Register</Button>
                  <Button href="/" variant="link">Login</Button>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section >
    );
  }
}

export default Register;
