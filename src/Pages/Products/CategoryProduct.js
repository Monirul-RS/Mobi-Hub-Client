import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

import ProductsCard from './ProductsCard';

const CategoryProduct = () => {
    const { name, products } = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className='my-32'>
            <h2 className='text-4xl font-bold text-center my-16'>{name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-3/4 mx-auto'>
                {
                    products.map(product => <ProductsCard
                        key={products._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    ></ProductsCard>)
                }
            </div>
            {
                selectedProduct &&
                <BookingModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></BookingModal>}

        </div>
    );
};

export default CategoryProduct;