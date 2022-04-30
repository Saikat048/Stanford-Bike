import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const [signInWithEmailAndPassword, user, loading ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)

    }


    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    // if (error) {
    //     return (
    //         <p className='text-danger error'>{error.message}</p>
    //     );
    // }

    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(
        auth
      );
    const handleResetPassword =async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }

      if (sending) {
        return <h1 className='text-center mt-5'>Sending...</h1>;
      }
 
      const provider = new GoogleAuthProvider();

      if(users){
          navigate('/home')
      } 
      const handleGoogleSignIn = () => {
          signInWithPopup(auth, provider)
          .then(result => {
            const user = result.user;
            setUsers(user);
          })
          .catch(error => {
            setError(error);
          })
      }
      


return (
    <div className='container'>
        <div className='row justify-content-md-center align-items-center'>
            <div className='mt-5 col-md-5 col-lg-5'>
                <img className='img-fluid  img' src="https://us.123rf.com/450wm/jirsak/jirsak1707/jirsak170700007/82255755-cybersecurity-and-information-technology-security-services-concept-login-or-sign-in-internet-concept.jpg?ver=6" alt="" />
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
                    </Form.Group> <p>New to Stanford Bike? <Link to="/signup">Please Sign Up</Link></p>


                    <button onClick={handleResetPassword} className='btn btn-link'>Forgot password?</button> <br />
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <ToastContainer />
                <button onClick={handleGoogleSignIn}>Sign In Google</button>
            </div>
        </div>
    </div>
);
};

export default Login;