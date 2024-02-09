import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import { AuthProvider } from './Login/useAuth';
import { useNavigate } from 'react-router-dom';
import {
    setRedirectToForbiddenPageFunction,
    setRedirectToUnauthorizedPageFunction
} from '../api/configuration/redirect';

const App = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setRedirectToForbiddenPageFunction(navigate);
        setRedirectToUnauthorizedPageFunction(navigate);
    }, [navigate]);
    return (
        <Container fluid>
            <Row>
                <Col md={ 12 }>
                    <AuthProvider>
                        <NavigationBar />
                    </AuthProvider>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
