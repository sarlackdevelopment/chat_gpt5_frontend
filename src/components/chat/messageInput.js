import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";
import { messagesService } from "../../services/messagesService";
import { useObservable } from "../../observable/useObservable";
import { storeUsersService } from "../../services/usersService";

const MessageInput = () => {
    const currentUser = useObservable(storeUsersService.currentUser);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message) {
            messagesService.addMessage({
                "id": uuidv4(),
                "content": message,
                "sender": { ...currentUser },
                "timestamp": new Date().toISOString()
            });
        }
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
