import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import { AuthProvider } from './Login/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={ 12 }>
                        <AuthProvider>
                            <NavigationBar />
                        </AuthProvider>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default App;
