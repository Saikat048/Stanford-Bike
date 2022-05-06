import React from 'react';
import { useForm } from "react-hook-form";
import useProducts from '../Hooks/Customhook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Additem = () => {

    const [products, setProducts] = useProducts();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = `https://blooming-refuge-59284.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast('added')
                    setProducts(data);
                }
            })
    }




    return (
        <div>
            <form className='d-flex flex-column w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description",)} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img",)} />
                <input className='mb-2' placeholder='Price' type="price" {...register("price",)} />
                <input type="submit" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Additem;