import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => (
    <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/article-list">Article List</Nav.Link>
                <Nav.Link href="/new-article">Make a Post</Nav.Link>
            </Nav>


        </Navbar>

    </>
);
export default NavBar;
