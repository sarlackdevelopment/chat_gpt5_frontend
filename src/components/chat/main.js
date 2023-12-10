import React, { useState } from 'react';
import Chat from "./chat";
import MessageInput from "./messageInput";
import UserDetailsModal from "./userDetailsModal";

const Main = () => {
    const [messages, setMessages] = useState([]); // Состояние для сообщений
    const [showModal, setShowModal] = useState(false); // Состояние для модального окна

    // Функции для обработки событий...

    return (
        <div>
            <Chat />
            <MessageInput />
            <UserDetailsModal />
        </div>
    );
};

export default Main;
