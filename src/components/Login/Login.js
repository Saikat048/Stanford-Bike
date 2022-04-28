import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div className='container '>
            <div className='row justify-content-center align-items-center'>
                <div className='mt-5 col-md-5 col-lg-5'>
                    <img className='img-fluid  img' src="https://us.123rf.com/450wm/jirsak/jirsak1707/jirsak170700007/82255755-cybersecurity-and-information-technology-security-services-concept-login-or-sign-in-internet-concept.jpg?ver=6" alt="" />
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
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;