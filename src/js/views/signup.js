import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    async function handleSignup(e) {
        e.preventDefault();

        const userData = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            age: parseInt(e.target.age.value)
        };

        try {
            const response = await fetch("https://super-space-happiness-69gj6p5v4p7qc45q7-3000.app.github.dev/create-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                // Aquí podrías almacenar el token en localStorage si lo deseas
                navigate("/login"); // Redirecciona a la página de login después de registrarse exitosamente
            } else {
                // Aquí puedes manejar cualquier otro caso de respuesta, como mostrar un mensaje de error
            }
        } catch (error) {
            console.error("Error creating user:", error);
            // Aquí puedes manejar errores de red u otros errores que puedan ocurrir
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
                            boxShadow: '0 0 10px 0 rgba(0, 132, 255, 0.842)',
                        }}
                    >
                        <Card.Title className="text-center mb-3" style={{ color: 'rgba(0, 132, 255, 0.842)', fontFamily: 'Star Jedi, sans-serif' }}>
                            <h4>Sign Up</h4>
                        </Card.Title>
                        <Form onSubmit={handleSignup} className="p-4 py-0">
                            <Form.Group controlId="formUserName" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    placeholder="Username"
                                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formAge" className="mb-3">
                                <Form.Control
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Password"
                                        style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
                                        required
                                    />
                                    <Button
                                        variant="secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ color: '#666', backgroundColor: 'transparent', border: 'none' }}
                                    >
                                        {showPassword ? <EyeSlashFill /> : <EyeFill />}
                                    </Button>
                                </InputGroup>
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
                                Register
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
