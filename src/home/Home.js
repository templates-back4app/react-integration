import React from 'react';
import './Home.css';
import Parse from "parse";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLoading: false,
            usernameError: false,
            passwordError: false,
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeHandler = event => {
        const name = event.target.getAttribute('id');
        const value = event.target.value;
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
        try{
            await Parse.User.logIn(this.state.username, this.state.password);
            alert("Logged in!");
        } catch (e){
            alert(e.message); 
        }
        
    }

    render() {

        return (
            <section id="home">
                <Container>
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
                                    <Button type="submit" className={"btn btn-primary"} disabled={( (!this.state.username || !this.state.password) ? true : false) ? true : false }>Login</Button>
                                    <Button href="/register" variant="link">Register</Button>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section >
        );
    }
}

export default Home;
