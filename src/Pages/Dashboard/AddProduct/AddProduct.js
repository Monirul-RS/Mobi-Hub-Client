import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    // const {data: addedProduct, isLoading} = useQuery({
    //     queryKey: ['addProduct'],
    //     queryFn: async () =>{
    //        const res = await fetch('http://localhost:5000/addProducts')
    //        const data = await res.json();
    //        return data;
    //     }
    // })

    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name,
                    price: data.price,
                    location: data.location,
                    image: imgData.data.url,
                    condition: data.condition,
                    mobile: data.mobile
                }
            }
        })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add a Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Name</p></label>
                    <input type="text"
                        {...register("name",
                            {
                                required: "Name is Required"
                            }
                        )}
                        className="input input-bordered w-full" />
                    {
                        errors.name &&
                        <div className='flex mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-error'>{errors.name?.message}</span>
                        </div>
                    }
                </div>
                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Select Image</p></label>
                    <input type="file" className="file-input  w-full max-w-xs" accept='image/*' required
                        {...register("image",
                            {
                                required: "Image is Required"
                            }
                        )}
                    />
                    {
                        errors.img &&
                        <div className='flex mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-error'>{errors.img?.message}</span>
                        </div>
                    }
                </div>
                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Price</p></label>
                    <input type="text"
                        {...register("price")}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Condition</p></label>
                    <input type="text"
                        {...register("condition")}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Location</p></label>
                    <input type="text"
                        {...register("location")}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label"><p className="label-text">Mobile Number</p></label>
                    <input type="text"
                        {...register("mobile")}
                        className="input input-bordered w-full " />
                </div>
                <input className='btn btn-accent w-full mb-2' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;