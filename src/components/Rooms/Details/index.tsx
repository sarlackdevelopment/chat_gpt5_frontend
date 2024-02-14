import React, { FC, useEffect, useState } from 'react';
import { ListGroup, FormCheck, Modal, Button } from 'react-bootstrap';
import { useObservable } from '../../../observable/useObservable';
import { storeUserService, userService } from '../../../services/userService';
import { IRoom } from '../../../services/roomService';

interface IProps {
    show: boolean;
    onHide: () => void;
    room: IRoom;
}

const RoomDetails: FC<IProps> = ({ show, onHide, room }) => {
    const usersByRoom = useObservable(storeUserService.usersByRoom);
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    useEffect(() => {
        if (room) {
            userService.getUsersByRoom(room.id);
        }
    }, [room?.id]);

    const toggleUserSelection = (userId: string) => {
        const newSelection = new Set(selectedUsers);
        if (newSelection.has(userId)) {
            newSelection.delete(userId);
        } else {
            newSelection.add(userId);
        }
        setSelectedUsers(newSelection);
    };

    return (
        <Modal show={ show } onHide={ onHide } centered>
            <Modal.Header closeButton>
                <Modal.Title>Детали комнаты: { room?.name }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Некоторая информация о комнате "{ room?.name }"</p>
                <ListGroup>
                    { usersByRoom.map((user) => (
                        <ListGroup.Item key={ user.id } className="d-flex align-items-center">
                            <FormCheck
                                type="checkbox"
                                checked={ selectedUsers.has(user.id) }
                                onChange={ () => toggleUserSelection(user.id) }
                            />
                            <span className="ms-2">{ user.username }</span>
                        </ListGroup.Item>
                    )) }
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ onHide }>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RoomDetails;
