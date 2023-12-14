import React, {useEffect, useState} from 'react';
import { ListGroup, Stack, Spinner, Alert } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import {messagesService, storeMessagesService} from "../../services/messagesService";
import {useObservable} from "../../observable/useObservable";
import {HubConnectionBuilder, HubConnectionState} from '@microsoft/signalr';

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

    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5094/chatHub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');

                    connection.on('ReceiveMessage', (user, message) => {
                        console.log('New Message', { user, message });
                        // Обработка полученного сообщения
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        if (connection && connection.state === HubConnectionState.Connected) {
            try {
                await connection.send('SendMessage', user, message);
            } catch (e) {
                console.log(e);
            }
        } else {
            alert('No connection to server yet.');
        }
    };

    const messages = useObservable(storeMessagesService.messages);
    const loadingMessageList = useObservable(storeMessagesService.loadingMessageList);
    const errorMessageList = useObservable(storeMessagesService.errorMessageList);

    useEffect(() => {
        messagesService.setMessages();
    }, []);

    if (loadingMessageList) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading messages...</span>
        </Spinner>
    }

    if (errorMessageList) {
        return <Alert variant='danger'>
            {`Something wrong during loading ${errorMessageList}`}
        </Alert>
    }

    return (
        <Stack gap={3}>
            <div>
                <button onClick={() => sendMessage('Alex', 'It works!!!')}>Send</button>
            </div>
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
