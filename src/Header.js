import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import auth from './firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky='top' >
                <Container  >

                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link href="blogs">Blogs</Nav.Link>
                        <Nav.Link href="items">Items</Nav.Link>
                        <Nav.Link href='login'>Login</Nav.Link>

                        {
                            user ?
                                <button className='btn btn-link text-decoration-none' onClick={handleSignOut} >signout</button>


                                :

                                <Nav.Link as={Link} to="login" >
                                    Login
                                </Nav.Link>}


                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;