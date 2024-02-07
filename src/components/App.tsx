import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const App = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={ 12 }>
                    <NavigationBar />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
