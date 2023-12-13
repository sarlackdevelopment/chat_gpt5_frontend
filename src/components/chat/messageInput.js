import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //onSendMessage(message);
        setMessage('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Введите сообщение..."
                />
                <Button variant="primary" type="submit">Отправить</Button>
            </InputGroup>
        </Form>
    );
};

export default MessageInput;
