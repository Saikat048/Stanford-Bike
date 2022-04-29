import React from 'react';
import useProducts from '../Hooks/Customhook';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Inventory.css'

const Inventory = () => {
    const [items] = useProducts();
    return (
        <div className='container'>
            <div className="row cards">
                {
                    items.map(item => <InventoryProduct item={item}></InventoryProduct>)
                }
            </div>
        </div>
    );
};

export default Inventory;