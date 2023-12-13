import React, { useEffect } from 'react';
import { ListGroup, Stack, Spinner, Alert } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import {messagesService, storeMessagesService} from "../../services/messagesService";
import {useObservable} from "../../observable/useObservable";

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
    const messages = useObservable(storeMessagesService.messages);
    const loading = useObservable(storeMessagesService.loading);
    const error = useObservable(storeMessagesService.error);

    useEffect(() => {
        messagesService.setMessages();
    }, []);

    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading messages...</span>
        </Spinner>
    }

    if (error) {
        return <Alert variant='danger'>
            {`Something wrong during loading ${error}`}
        </Alert>
    }

    return (
        <Stack gap={3}>
            <ListGroup>
                {messages?.length !== 0 ? messages?.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message.content}
                        author={message.sender.username}
                    />
                )) : 'Нет сообщений'}
            </ListGroup>
        </Stack>
    );
};

export default Chat;
