import React from 'react';

const ProductsCard = ({ product }) => {
    const { products_name, img, location, rePrice, orPrice, useTime, sallerName, postedTime, storage } = product;

    // "products_name": "Xiaomi Redmi Note 11 Pro Plus 5G",
    //             "img": "https://i.ibb.co/wd76kQG/Redmi-note-11-pro-plus.jpg",
    //             "location": "Tahirpur, Dhaka",
    //             "rePrice": "40,000",
    //             "orPrice": "68,000",
    //             "useTime": "9 months",
    //             "sallerName": "Rakin",
    //             "postedTime": "",
    //             "storage": "64GB"
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 lg:mr-8'>
                    <img src={img} alt='' className="lg:max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">{products_name}</h1>
                    <p className="py-6">{rePrice}</p>
                    <p className="py-6">{orPrice}</p>
                    <p className="py-6">{useTime}</p>
                    <p className="py-6">{sallerName}</p>
                    <p className="py-6">{postedTime}</p>
                    <p className="py-6">{storage}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;