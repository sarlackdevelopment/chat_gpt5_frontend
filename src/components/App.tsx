import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import ChatComponent from './ChatField/index.';
import NavigationBar from './NavigationBar';

const App = () => {
    return (
        <Container fluid>
            { /*<Row className="mb-3">*/ }
            { /*    <Col>*/ }
            { /*        <NavigationBar />*/ }
            { /*    </Col>*/ }
            { /*</Row>*/ }
            <Row>
                <Col md={ 12 }>
                    <NavigationBar />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
