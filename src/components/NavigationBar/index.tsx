import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Rooms from '../Rooms';
import ChatComponent from '../ChatField';
import AuthForm from '../Login';
import ProtectedRoute from '../Login/ProtectedRoute';

const NavigationBar = () => {
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
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={ <AuthForm /> } />
                <Route
                    path="/chat"
                    element={ <ProtectedRoute component={ ChatComponent } allowedRoles={ ['user', 'moderator'] } /> }
                />
                <Route
                    path="/rooms"
                    element={ <ProtectedRoute component={ Rooms } allowedRoles={ ['moderator'] } /> }
                />
            </Routes>
        </>
    );
};

export default NavigationBar;
