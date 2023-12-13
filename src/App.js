import Main from "./components/routes/main";
import {Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./components/routes/users";
import {Container, Navbar} from "react-bootstrap";
import React from "react";
import {useObservable} from "./observable/useObservable";
import {storeUsersService} from "./services/usersService";

function App() {
  const currentUser = useObservable(storeUsersService.currentUser);
  return <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Brand as={Link} to="/users">Users</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{currentUser?.username}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/users" element={<UserList/>} />
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
}

export default App;
