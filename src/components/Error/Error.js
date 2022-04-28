import React from 'react';
import { Container } from 'react-bootstrap';
import './Error.css'

const Error = () => {
    return (
        <Container>
            <div className='error'>
                <div>
                    <h2 className='mb-4 fw-bold'>OPPOS, SORRY WE CAN'T FIND THAT PAGE...!</h2>
                    <p>Either something went wrong or the page doesn't exist anymore</p>
                </div>
                <div>
                    <img class="img-fluid" src="https://media.istockphoto.com/photos/error-404-picture-id497375975" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Error;