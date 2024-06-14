import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await actions.login(email, password);
        if (response) {
            actions.validateToken();
            navigate("/"); 
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <Container fluid style={{ backgroundColor: '#000', color: '#fff', height: '100vh' }}>
            <Row className="vh-100 justify-content-center align-items-center">
                <Col md={5}>
                    <Card
                        className="p-4 justify-content-center w-100"
                        style={{
                            background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                            border: 'none',
                            boxShadow: '0 0 10px 0 rgba(0, 132, 255, 0.842)'
                        }}
                    >
                        <Card.Title
                            className="text-center mb-3"
                            style={{
                                color: 'rgba(0, 132, 255, 0.842)',
                                fontFamily: 'Star Jedi, sans-serif'
                            }}
                        >
                            <h4>Log In</h4>
                        </Card.Title>
                        <Form onSubmit={handleSubmit} className="p-4 py-0">
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        backgroundColor: '#1a1a1a',
                                        border: '1px solid #333',
                                        color: "rgba(0, 132, 255, 0.842)"
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{
                                        backgroundColor: '#1a1a1a',
                                        border: '1px solid #333',
                                        color: '#fff'
                                    }}
                                />
                            </Form.Group>
                            <Button
                                variant="warning"
                                type="submit"
                                className="w-100 mb-3"
                                style={{
                                    backgroundColor: 'rgba(0, 132, 255, 0.842)',
                                    border: 'none',
                                    color: '#000'
                                }}
                            >
                                Login
                            </Button>
                            <Form.Text className="text-center">
                                <Link
                                    to="/password-recovery"
                                    style={{
                                        color: 'rgba(0, 132, 255, 0.842)',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Forgot Password?
                                </Link>
                            </Form.Text>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

