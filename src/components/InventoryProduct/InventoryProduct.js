
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import './InventoryProduct.css'

const InventoryProduct = (props) => {
    // console.log(props)
    const { _id, name, img, price } = props.item;

    const navigate = useNavigate();

    const showDetail = id => {
        navigate(`/inventory/${id}`)
    } 

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


    return (
        <div>
            <div className="card shadow-sm m-3 bg-body rounded">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p>Price : {price} </p>
                </div>
                <button onClick={() => showDetail(_id)} className="btn btn-primary mb-1">Details</button>
                <button onClick={() => handleSelect(props.item)} className="btn btn-danger mb-1">Select</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InventoryProduct;