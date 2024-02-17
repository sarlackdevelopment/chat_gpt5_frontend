import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Rooms from '../Rooms';
import AuthForm from '../Login';
import ProtectedRoute from '../Login/ProtectedRoute';
import { useAuth } from '../Login/useAuth';
import ErrorPage from '../ErrorPage/403';
import UnauthorizedPage from '../ErrorPage/401';
import RoomsComponent from '../Tabs';
import { roomService } from '../../services/roomService';
import { userService } from '../../services/userService';

const NavigationBar = () => {
    const { logout } = useAuth();
    useEffect(() => {
        roomService.getRooms();
        userService.getUsers();
    }, []);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/chat" className="nav-link">Chat</Link>
                        <Link to="/rooms" className="nav-link">Rooms</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={ logout } className="justify-content-end">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={ <AuthForm /> } />
                <Route
                    path="/chat"
                    element={ <ProtectedRoute component={ RoomsComponent } allowedRoles={ ['user', 'moderator'] } /> }
                />
                <Route
                    path="/rooms"
                    element={ <ProtectedRoute component={ Rooms } allowedRoles={ ['moderator'] } /> }
                />
                <Route path="/forbidden" element={ <ErrorPage /> } />
                <Route path="/unauthorized" element={ <UnauthorizedPage /> } />
            </Routes>
        </>
    );
};

export default NavigationBar;
