import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='reg-form w-50 mx-auto ' >
            <h2>You can register here</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id='' placeholder='enter name'></input>
                <input type="email" name="email" id='' placeholder='enter email'></input>
                <input type="password" name="password" id='' placeholder='enter password'></input>
                <input type="submit" value="Register" />

            </form>
            <p>Already Registered? <Link to='/login' className='text-primary text-decoration-none ' onClick={navigateLogin}  >Login Here</Link> </p>

        </div>
    );
};

export default Register;