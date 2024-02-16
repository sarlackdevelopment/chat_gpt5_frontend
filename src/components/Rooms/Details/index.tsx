import React, { FC, useEffect } from 'react';
import { ListGroup, FormCheck, Modal, Button } from 'react-bootstrap';
import { useObservable } from '../../../observable/useObservable';
import { storeUserService, userService } from '../../../services/userService';
import { IRoom } from '../../../services/roomService';
import { joinUserToRoom, leaveRoom } from '../../../api/users';

interface IProps {
    show: boolean;
    onHide: () => void;
    room: IRoom;
}

const RoomDetails: FC<IProps> = ({ show, onHide, room }) => {
    const users = useObservable(storeUserService.users);
    const usersByRoom = useObservable(storeUserService.usersByRoom);
    useEffect(() => {
        if (room) {
            userService.getUsersByRoom(room.id);
        }
    }, [room?.id]);

    return (
        <Modal show={ show } onHide={ onHide } centered>
            <Modal.Header closeButton>
                <Modal.Title>Детали комнаты: { room?.name }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Некоторая информация о комнате "{ room?.name }"</p>
                <ListGroup>
                    { users.map((user) => (
                        <ListGroup.Item key={ user.id } className="d-flex align-items-center">
                            <FormCheck
                                type="checkbox"
                                checked={ !!usersByRoom.find(({ id }) => user.id === id) }
                                onChange={ async (e) => {
                                    if (!e.target.checked) {
                                        await leaveRoom(user.id, room?.id);
                                    } else {
                                        await joinUserToRoom(user.id, room?.id);
                                    }
                                    userService.getUsersByRoom(room.id);
                                } }
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
