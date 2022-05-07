import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div className='reg-form w-50 mx-auto ' >
            <h2>You can register here</h2>
            <form>
                <input type="text" name="name" id='' placeholder='enter name'></input>
                <input type="email" name="email" id='' placeholder='enter email'></input>
                <input type="password" name="password" id='' placeholder='enter password'></input>
                <input className='bg-secondary' type="submit" value="Register" />

            </form>
            <p>Already Registered? <Link to='/login' className='text-primary text-decoration-none ' onClick={navigateLogin}  >Login Here</Link> </p>

        </div>
    );
};

export default Register;