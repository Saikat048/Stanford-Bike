
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProducts from '../Hooks/Customhook';
import './InventoryProduct.css'

const InventoryProduct = (props) => {
    // console.log(props)
    const { _id, name, img, price } = props.item;

    const navigate = useNavigate();

    const showDetail = id => {
        navigate(`/inventory/${id}`)
    }



    // select item 

    const handleSelect = item => {
        console.log(item)
        fetch('https://blooming-refuge-59284.herokuapp.com/item', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data) {
                    toast('Selected')
                }
            })
    }



    // Delete Product 

    const [products, setProducts] = useProducts([]);

    const handleDelete = id => {
        // console.log(id) 
        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) { 

            const url = `https://blooming-refuge-59284.herokuapp.com/products/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className="card shadow-sm m-3 bg-body rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p>Price : {price} </p>
                </div>
                <div className='mx-auto mb-2'>
                    <button onClick={() => showDetail(_id)} className="btn btn-primary">Details</button>
                    <button onClick={() => handleSelect(props.item)} className="btn btn-info">Select</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InventoryProduct;