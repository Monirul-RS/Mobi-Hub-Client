import React from 'react';

const ProductsCard = ({ product, setSelectedProduct }) => {
    const { products_name, img, location, rePrice, orPrice, useTime, sallerName, postedTime, storage } = product;

    return (
        // <div className="card lg:card-side my-16 w-1/2 mx-auto bg-base-100 shadow-xl">
        //     <figure><img src={img} className='w-96 h-96' alt="Album" /></figure>
        //     <div className="card-body">
        // <h2 className="card-title text-4xl">{products_name}!</h2>
        // <p className="">Resale Price: {rePrice}</p>
        //     <p className="">Original Price: {orPrice}</p>
        //     <p className="">Used for: {useTime}</p>
        //     <p className="">Saller: {sallerName}</p>
        //     <p className="">{postedTime}</p>
        //     <p className="">Storage: {storage}</p>
        // <div className="card-actions justify-end">
        //     <label 
        //     onClick={() =>setSelectedProduct(product)}
        //     htmlFor="booking-modal" 
        //     className="btn btn-primary"
        //     >Book Now</label>

        // </div>
        //     </div>
        // </div>
        <div className="card  shadow-xl">
            <figure><img className='h-96 w-96 rounded-3xl' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{products_name}!</h2>
                <p className="">Resale Price: {rePrice}</p>
                <p className="">Original Price: {orPrice}</p>
                <p className="">Used for: {useTime}</p>
                <p className="">Seller: {sallerName}</p>
                <p className="">{postedTime}</p>
                <p className="">Storage: {storage}</p>
                <div className="card-actions justify-end">
                    <label
                        onClick={() => setSelectedProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >Book Now</label>

                </div>
            </div>
        </div>

    );
};

export default ProductsCard;