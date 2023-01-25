import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Review.css'
const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://perfume-shop-node-server.onrender.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Review Successfull');
                    reset();
                }
            });
        reset();
    }
    return (
        <div>
            
            <div className="detail_form_review">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input value={user?.displayName}
                        {...register("name", { required: true })} readonly  />
                    <input value={user?.email}
                        {...register("email", { required: true })} readonly  />
                    <textarea placeholder="Review"
                        {...register("review", { required: true })} />
                    <input placeholder="Rating out of 5" type = 'number'
                        {...register("rating", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;