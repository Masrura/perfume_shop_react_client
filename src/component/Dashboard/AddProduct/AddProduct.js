import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://perfume-shop-node-server.onrender.com/perfume", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Product Added');
                    reset();
                }
            });
        reset();
    }
    return (
        <div>
            <div className="detail_form_review">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name"
                        {...register("name", { required: true })}  />
                    <input type='number' placeholder="Price"
                        {...register("price", { required: true })}  />
                    <textarea placeholder="Description"
                        {...register("description", { required: true })} />
                    <input placeholder="Image URL"
                        {...register("img", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;