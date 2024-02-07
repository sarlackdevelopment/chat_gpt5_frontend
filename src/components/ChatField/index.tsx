import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import style from './styles.module.scss';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (currentMessage.trim() !== '') {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');
        }
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col>
                    <ListGroup>
                        { messages.map((message, index) => (
                            <ListGroup.Item key={ index } className={ style.item }>
                                { message }
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                </Col>
            </Row>
            <Form className="mt-3" onSubmit={ handleSendMessage }>
                <Form.Group className="mb-3" controlId="messageInput">
                    <InputGroup>
                        <FormControl
                            as="textarea"
                            rows={ 3 }
                            value={ currentMessage }
                            onChange={ (e) => setCurrentMessage(e.target.value) }
                            placeholder="Введите сообщение..."
                            className={ style.border }
                        />
                        <Button
                            variant="outline-secondary"
                            type="submit"
                            className={ style.button }>
                            Отправить
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default ChatComponent;
