    
import useItems from '../Hooks/Itemshook';
import TableData from '../TableData/TableData';

const Myitem = () => {
    const [items, setItems] = useItems();
    
    const handleDelete = id => {
        // console.log(id) 
        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) {
            console.log(id)
            const url = `https://blooming-refuge-59284.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                }, 
            })
                .then(response => response.json())
                .then(data => {
                   if(data.deletedCount > 0) {
                     const remaining = items.filter(product => product._id !== id)
                     setItems(remaining)
                   }
                })
        }
    }

   
    return (
        <div> 
             {
                 items.map(item => <TableData key={item._id} item={item} handleDelete={handleDelete}></TableData>)
             }
        </div>
    );
};

export default Myitem;