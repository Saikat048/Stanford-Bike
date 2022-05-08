 import useItems from '../Hooks/Itemshook';
import TableData from '../TableData/TableData';
import './Myitem.css'

const Myitem = () => {
    const [items, setItems] = useItems();

    // Delete Item 

    const handleDelete = id => {
        // console.log(id) 
        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) {
            // console.log(id)

            const url = `https://blooming-refuge-59284.herokuapp.com/item/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id)
                        setItems(remaining)
                    }
                })
        }
    }


    return (
        <div className='container'>
            <div className='item'>
                {
                    items.map(item => <TableData key={item._id} item={item} handleDelete={handleDelete}></TableData>)
                }
            </div>
        </div>
    );
};

export default Myitem;