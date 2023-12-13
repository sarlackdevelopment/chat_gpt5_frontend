import React, { useState } from 'react';
import Chat from "./chat";
import MessageInput from "./messageInput";
import UserDetailsModal from "./userDetailsModal";
import { Container, Row } from "react-bootstrap";

const Main = () => {
    const [messages, setMessages] = useState([]); // Состояние для сообщений
    const [showModal, setShowModal] = useState(false); // Состояние для модального окна

    // Функции для обработки событий...

    return (
        <Container>
            <Row>
                <Chat />
                <MessageInput />
                <UserDetailsModal />
            </Row>
        </Container>
    );
};

export default Main;
