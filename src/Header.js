import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default header;