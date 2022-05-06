import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ShowDetail.css'

const ShowDetail = () => {
    const { inventoryId } = useParams();
    // console.log(inventoryId)

    const [product, setProduct] = useState([]);
    // console.log(product)

    useEffect(() => {
        const url = `https://blooming-refuge-59284.herokuapp.com/products/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    // const [quantity, setQuantity] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        // if (number <= 0) {
        //     alert('Not A valid Number');
        //     event.target.reset();
        //     return;
        // }
        const quantity = { number };

        const url = `https://blooming-refuge-59284.herokuapp.com/products/${inventoryId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    }


    return (
        <div>
            <div className='container detail'>
                <div className="row justify-content-between">
                    <Card className='col-6 mx-auto' style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={product.img} />


                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                                <Form.Control type="number" placeholder="Add Quantity" name='number' required />
                            </Form.Group>
                            <Button variant="primary" type="submit">Add</Button>
                            <Button className='ms-3 ' variant="primary">Delivered</Button>
                        </Form>
                    </Card>


                    <div className='bg-danger col-6 mx-auto'>
                        <h1 className='text-center'>Information</h1>
                        <hr className='w-50 mx-auto' />

                        <div className='container mt-5'>
                            <h3>Name : {product.name}</h3>
                            <p>Description : {product.description}</p>
                            <p>Price : {product.price}</p>
                            <p>Quantity : {product.quantity}</p>
                            <p>Supplier Name : {product.supplier}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;