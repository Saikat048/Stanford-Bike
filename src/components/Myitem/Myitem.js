import React, { useEffect, useState } from 'react';   
import Table from '../Table/Table';

const Myitem = () => {
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(() => {
        fetch('https://blooming-refuge-59284.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
             {
                 items.map(item => <Table key={item._id} item={item}></Table>)
             }
        </div>
    );
};

export default Myitem;