import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Form, InputGroup, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { IRoom, roomService, storeRoomService } from '../../services/roomService';
import { useObservable } from '../../observable/useObservable';
import { userService } from '../../services/userService';
import RoomDetails from './Details';

const Rooms = () => {
    const rooms = useObservable(storeRoomService.rooms);
    const [roomName, setRoomName] = useState('');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        roomService.getRooms();
        userService.getUsers();
    }, []);

    const createRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        roomService.createRoom(roomName);
    };

    const deleteRoom = (roomId: string) => {
        roomService.deleteRoom(roomId)
    };

    const handleShowDetails = (room: IRoom) => {
        console.log(room);
        setSelectedRoom(room);
        setShowModal(true);
    };

    return (
        <Container className='mt-2'>
            <Row className="justify-content-md-center">
                <Col md={ 6 }>
                    <Form onSubmit={ createRoom } className="mb-3">
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Название новой комнаты"
                                value={ roomName }
                                onChange={ (e) => setRoomName(e.target.value) }
                            />
                            <Button variant="outline-secondary" type="submit">Добавить</Button>
                        </InputGroup>
                    </Form>

                    <ListGroup>
                        { rooms?.map(({ name, id }) => (
                            <ListGroup.Item key={ id } className="d-flex justify-content-between align-items-center">
                                { name }
                                <div>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={ () => deleteRoom(id) }>
                                    Удалить
                                    </Button>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={ () => handleShowDetails({ name, id }) } >
                                    Детали
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                </Col>
            </Row>
            <RoomDetails
                show={ showModal }
                onHide={ () => setShowModal(false) }
                room={ selectedRoom }
            />
        </Container>
    );
};

export default Rooms;
