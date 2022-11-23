import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    // if (token) {
    //     navigate(from, { replace: true });
    // }


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)
                console.log(user);
                toast.success('Login Successfull');

            })
            .catch(err => {
                console.error(err);
                setLoginError(err.message)
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
                <p className='text-xl text-center font-semibold mb-6 text-accent '>Login</p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><p className="label-text">Email</p></label>
                        <input type="email"
                            {...register("email",
                                {
                                    required: "Email Address is required"
                                }
                            )}
                            className="input input-bordered w-full " />
                        {
                            errors.email &&
                            <div className='flex mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-error'>{errors.email?.message}</span>
                            </div>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><p className="label-text">Password</p></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                }
                            )}
                            className="input input-bordered w-full" />
                        {
                            errors.password &&
                            <div className='flex mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-error'>{errors.password?.message}</span>
                            </div>
                        }
                        <label className="label"><p className="label-text">Forget Password?</p></label>
                    </div>
                    <input className='btn btn-accent w-full mb-2' value='Login' type="submit" />
                    <div>
                        {
                            loginError &&
                            <div className='flex mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-error" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-error'>{loginError}</span>
                            </div>
                        }
                    </div>
                </form>
                <p className='text-center'><small>New to Doctor's Portal? <Link className='text-primary' to='/signup'>Create new account</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'><p>CONTINUE WITH GOOGLE</p></button>
            </div>
        </div>
    );
};

export default Login;