import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddDoctor = data =>{

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
                    <input type="file" className=" w-full max-w-xs" accept='image/*' required
                        {...register("img",
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
                <select
                    {...register("role",
                        {
                            required: "Role is Required"
                        }
                    )} className="select select-bordered w-full max-w-xs">
                    <option>buyer</option>
                    <option>seller</option>
                </select>

                <div className="form-control w-full">
                    <label className="label"><p className="label-text">Email</p></label>
                    <input type="email"
                        {...register("email",
                            {
                                required: "Email Address is required"
                            }
                        )}
                        className="input input-bordered w-full " required />
                    {
                        errors.email &&
                        <div className='flex mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-error'>{errors.email?.message}</span>
                        </div>
                    }
                </div>
                <input className='btn btn-accent w-full mb-2' value='Sign Up' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;