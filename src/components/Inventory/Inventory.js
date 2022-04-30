import React from 'react';
import useProducts from '../Hooks/Customhook';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Inventory.css';

const Inventory = () => {
    const [items] = useProducts();
    return (
        <div className='container'>
            <div className="cards">
                {
                    items.map(item => <InventoryProduct key={item._id} item={item}></InventoryProduct>)
                }
            </div>
        </div>
    );
};

export default Inventory;