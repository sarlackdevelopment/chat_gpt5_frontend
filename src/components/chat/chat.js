import React, {useEffect, useState} from 'react';
import {Modal, Button, ListGroup, Stack} from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const ChatMessage = ({ author, message }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5094/Chat/messages').then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Stack gap={3}>
            <ListGroup>
                {messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message.content}
                        author={message.sender.username}
                    />
                ))}
            </ListGroup>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
            </Modal>
        </Stack>
    );
};

export default Chat;
