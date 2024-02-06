import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    return (
        <Container fluid>
            <Row className="mb-3">
                <Col>
                    <>Header</>
                </Col>
            </Row>
            <Row>
                <Col md={ 8 }>
                    <>Messages</>
                </Col>
                <Col md={ 4 }>
                    <>Buttons</>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
