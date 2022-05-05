  
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/Customhook';
import './InventoryProduct.css'

const InventoryProduct = (props) => {
    // console.log(props)
    const { _id, name, img, price } = props.item;

    const navigate = useNavigate();

    const showDetail = id => {
        navigate(`/inventory/${id}`)
    }

    const [products, setProducts] = useProducts(); 
 


    // const handleDelete = id => {
    //     // console.log(id)
    //     const proceed = window.confirm('Are you sure, You want to delete...?')
    //     if (proceed) {
    //         console.log(id)
    //         const url = `http://localhost:5000/products/${id}`;
    //         fetch(url, {
    //             method: 'DELETE', // or 'PUT'
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }, 
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                if(data.deletedCount > 0) {
    //                  const remaining = products.filter(product => product._id !== id)
    //                  setProducts(remaining)
    //                }
    //             })
    //     }
    // }

    const handleDelete = product => {
        console.log(product)
  


        //   const url = `http://localhost:5000/products`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data) {
        //             toast('added')
        //             setProducts(data);
        //         }
        //     })
        
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
                <button onClick={() => handleDelete(_id)} className="btn btn-danger mb-1">Select</button>
            </div>
        </div>
    );
};

export default InventoryProduct;