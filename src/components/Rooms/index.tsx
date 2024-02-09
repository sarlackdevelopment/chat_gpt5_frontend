import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Form, InputGroup, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { roomService, storeRoomService } from '../../services/roomService';
import { useObservable } from '../../observable/useObservable';

const Rooms = () => {
    //const [rooms, setRooms] = useState([]);
    const rooms = useObservable(storeRoomService.rooms);
    const [roomName, setRoomName] = useState('');
    useEffect(() => {
        roomService.getRooms();
    }, []);

    const addRoom = (e: FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // if (!roomName.trim()) return;
        // setRooms([...rooms, roomName]);
        // setRoomName('');
    };

    const deleteRoom = (roomIndex: number) => {
        //setRooms(rooms.filter((_, index) => index !== roomIndex));
    };

    return (
        <Container className='mt-2'>
            <Row className="justify-content-md-center">
                <Col md={ 6 }>
                    <Form onSubmit={ addRoom } className="mb-3">
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
                        { rooms?.map((room, index) => (
                            <ListGroup.Item key={ index } className="d-flex justify-content-between align-items-center">
                                { room.name }
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={ () => deleteRoom(index) }>
                                    Удалить
                                </Button>
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Rooms;
