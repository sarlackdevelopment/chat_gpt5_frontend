import React from 'react';
import Chat from "../chat/chat";
import MessageInput from "../chat/messageInput";
import { Container, Row } from "react-bootstrap";

const Main = () => {
    return (
        <Container>
            <Row>
                <Chat />
                <MessageInput />
            </Row>
        </Container>
    );
};

export default Main;
