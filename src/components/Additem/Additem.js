import React from 'react';
import { useForm } from "react-hook-form";
import useProducts from '../Hooks/Customhook';


const Additem = () => {

    const [products, setProducts] = useProducts()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setProducts(data);
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
        </div>
    );
};

export default Additem;