import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle, loading,
        setLoading } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/')
    // }

    const handleSignUp = data => {
        // console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err);
                setSignupError(err.message);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                // setCreatedUserEmail(email);
            })
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border rounded-2xl shadow-xl'>
                <p className='text-xl text-center font-semibold mb-6 text-accent '>Sign Up</p>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            {...register("name",
                                {
                                    required: "Name is Required"
                                }
                            )}
                        />
                        {
                            errors.name &&
                            <div className='flex mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-error'>{errors.name?.message}</span>
                            </div>
                        }
                    </div>

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
                    <div className="form-control w-full mb-6">
                        <label className="label"><p className="label-text">Password</p></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase number & special character!' }
                                }
                            )}
                            className="input input-bordered w-full" required />
                        {
                            errors.password &&
                            <div className='flex mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-error'>{errors.password?.message}</span>
                            </div>
                        }
                    </div>
                    <input className='btn btn-accent w-full mb-2' value='Sign Up' type="submit" />
                    {
                        signupError &&
                        <div className='flex mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-error'>{signupError}</span>
                        </div>
                    }
                </form>
                <p className='text-center'><small>Already have an account? <Link className='text-accent' to='/login'>Please Login</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p className='ml-2'>CONTINUE WITH GOOGLE</p></button>
            </div>
        </div>
    );
};

export default SignUp;