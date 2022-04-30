import React from 'react';
import Footer from '../Footer/Footer';
import useProducts from '../Hooks/Customhook';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import './Inventory.css';

const Inventory = () => {
    const [items] = useProducts();
    return (
        <div>
            <div className='container'>
                <div className="cards">
                    {
                        items.map(item => <InventoryProduct key={item._id} item={item}></InventoryProduct>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    ); 
};

export default Inventory;