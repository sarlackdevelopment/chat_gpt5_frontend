import React, { useState } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import FormTemplate from './FormTemplate';

const Login = () => {
    const [activeKey, setActiveKey] = useState('login');
    return (
        <Container className="mt-5">
            <Tab.Container activeKey={ activeKey } onSelect={ (k) => setActiveKey(k) }>
                <Row>
                    <Col sm={ 12 }>
                        <Nav variant="pills" className="justify-content-center mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="login">Авторизация</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="register">Регистрация</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={ 12 }>
                        <Tab.Content>
                            <Tab.Pane eventKey="login">
                                <FormTemplate caption='Войти' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="register">
                                <FormTemplate caption='Зарегистрироваться' />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Login;
