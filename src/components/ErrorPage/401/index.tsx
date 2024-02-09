import React from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={ 6 }>
                    <Alert variant="warning">
                        <Alert.Heading>Ошибка 401: Неавторизован</Alert.Heading>
                        <p>
                            Вы не авторизованы для доступа к этой странице.
                            Пожалуйста, войдите в систему, чтобы продолжить.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={ () => navigate('/login') } variant="outline-secondary">
                                Войти
                            </Button>
                        </div>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};

export default UnauthorizedPage;
