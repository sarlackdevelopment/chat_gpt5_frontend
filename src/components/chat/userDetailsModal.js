import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const UserDetailsModal = ({ show, onHide, user }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Детали пользователя</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<Image src={user.avatarUrl || 'placeholder-avatar-url'} roundedCircle />*/}
                <h5>{user?.username}</h5>
                <Button onClick={() => {/* Логика для начала приватного чата */}}>
                    Приватный чат
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default UserDetailsModal;
