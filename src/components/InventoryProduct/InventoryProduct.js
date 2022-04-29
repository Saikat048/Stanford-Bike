import React from 'react';
import { Card } from 'react-bootstrap';
import './InventoryProduct.css'

const InventoryProduct = (props) => {
    console.log(props)
    const { img } = props.item;
    return (
        <div>
            <div className="card shadow-sm m-3 bg-body rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> </h5>
                    <p> </p>
                    <p>Price:  </p>
                    <p className="card-text"> </p>
                </div>
                <button className="btn btn-primary mb-1">Chick Out</button>
            </div>
        </div>
    );
};

export default InventoryProduct;