import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Email 
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    // Password 
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    // Confirm Password 
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    // Create user with email and password

    const handleSubmit = event => {
        event.preventDefault(); 
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters or more...')
            return;
        }
        createUserWithEmailAndPassword(email, password)

        // emailVerification
        sendEmailVerification();
    }

    if (user) {
        navigate('/home')
    }

    // Spinner 
    
    if (loading) {
        return <span className='d-flex mx-auto justify-content-center mt-5'><Spinner animation="border" variant="primary" /></span>;
    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-md-center align-items-center'>
                    <div className='mt-5 col-md-5 col-lg-5'>
                        <img className='img-fluid  img' src="https://www.seoclerk.com/pics/want52650-19fSlK1499512787.jpg" alt="" />
                    </div>
                    <div className=' col-md-7 col-lg-7'>
                        <Form onSubmit={handleSubmit} className='mt-5 form form-control'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                                <p className='text-danger'>{error}</p>
                            </Form.Group> <p>Already have an account? <Link to="/login">Please Log In</Link></p>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;