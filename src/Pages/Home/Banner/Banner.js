import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome Here!</h1>
                    <p className="mb-5">Choose your category or brand you want to Claim! Here you can add product to sell and you can buy as well! But first you need to have an account!</p>
                    <Link to='/'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;