import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

import ProductsCard from './ProductsCard';

const CategoryProduct = () => {
    const { name, products } = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div>
            <div>
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
                ></BookingModal>}

        </div>
    );
};

export default CategoryProduct;