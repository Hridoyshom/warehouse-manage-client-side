import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')

    }
    return (
        <div className='container w-50 mx-auto' >
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New Here <Link to='/register' className='text-primary text-decoration-none ' onClick={navigateRegister}  >Register Here</Link> </p>
        </div>
    );
};
export default Login;