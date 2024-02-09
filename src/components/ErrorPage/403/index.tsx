import React from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={ 6 }>
                    <Alert variant="danger">
                        <Alert.Heading>Ошибка 403: Доступ запрещён</Alert.Heading>
                        <p>
                            К сожалению, у вас нет доступа к этой странице. Возможно, вам следует войти в систему
                            под другим пользователем или обратиться к администратору.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={ () => navigate('/') } variant="outline-danger">
                                Вернуться на главную
                            </Button>
                        </div>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
