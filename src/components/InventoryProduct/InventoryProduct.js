import React from 'react';
import { Card } from 'react-bootstrap';
import './InventoryProduct.css'

const InventoryProduct = (props) => {
    console.log(props)
    const {name, img, description, price, quantity, supplier} = props.item;
    return (
        <div>
            <div className="card shadow-sm m-3 bg-body rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5> 
                    <p>Price : {price} </p>  
                </div>
                <button className="btn btn-primary mb-1">Details</button>
            </div>
        </div>
    );
};

export default InventoryProduct;