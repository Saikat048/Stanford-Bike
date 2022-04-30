import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ShowDetail.css'

const ShowDetail = () => {
    const { inventoryId } = useParams();
    // console.log(inventoryId)

    const [product, setProduct] = useState([]);
    // console.log(product)

    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <div>
            <div className='container detail'>
                <div className="row justify-content-between">
                    <Card className='col-6 mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>Name : {product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <p>Price : {product.price}</p>
                            <p>Quantity : {product.quantity}</p>
                            <p>Supplier Name : {product.supplier}</p>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <div className='bg-danger col-6 mx-auto'>
                        <h1>Information</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;