import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div>
           <div className='container'>
            <div className='row justify-content-md-center align-items-center'>
                <div className='mt-5 col-md-5 col-lg-5'>
                    <img className='img-fluid  img' src="https://www.seoclerk.com/pics/want52650-19fSlK1499512787.jpg" alt="" />
                </div>
                <div className=' col-md-7 col-lg-7'>
                    <Form className='mt-5 form form-control'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required />
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