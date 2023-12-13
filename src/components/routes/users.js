import React, {useEffect, useState} from 'react';
import {Card, Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import {storeUsersService, usersService} from "../../services/usersService";
import {useObservable} from "../../observable/useObservable";

const UserCreationForm = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            usersService.addUser({
                "id": uuidv4(),
                "username": username
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add User
            </Button>
        </Form>
    );
};

const UserCard = ({ user }) => {
    const currentUser = useObservable(storeUsersService.currentUser);
    return (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                    ID: {user.id}
                </Card.Text>
                {currentUser.id === user.id ?
                    <Button onClick={() => usersService.setActivate(user.id)} variant='outline-primary'>activated</Button>:
                    <Button onClick={() => usersService.setActivate(user.id)} variant='link'>activate</Button>}
            </Card.Body>
        </Card>
    );
};

const UserList = () => {
    useEffect(() => {
        usersService.setUsers();
    }, [])

    const users = useObservable(storeUsersService.users);
    const loadingUserList = useObservable(storeUsersService.loadingUserList);
    const errorUserList = useObservable(storeUsersService.errorUserList);

    if (loadingUserList) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading users...</span>
        </Spinner>
    }

    if (errorUserList) {
        return <Alert variant='danger'>
            {`Something wrong during loading ${errorUserList}`}
        </Alert>
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <UserCreationForm />
                </Col>
            </Row>
            <Row>
                {users?.length !== 0 ? users?.map(user => (
                    <Col key={user.id} sm={12} md={6} lg={4}>
                        <UserCard user={user} />
                    </Col>
                )) : 'Нет пользователей'}
            </Row>
        </Container>
    );
};

export default UserList;

