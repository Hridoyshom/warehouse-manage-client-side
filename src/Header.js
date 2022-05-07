import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky='top' >
                <Container  >

                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link href="blogs">Blogs</Nav.Link>
                        <Nav.Link href="items">Items</Nav.Link>
                        <Nav.Link href='login'>Login</Nav.Link>


                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default header;