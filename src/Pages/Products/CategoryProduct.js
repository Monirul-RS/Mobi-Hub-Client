import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const CategoryProduct = () => {
    const {name, products} = useLoaderData();
    console.log(products);
    // const {products_name} = products;
    // console.log(products.products_name);
    return (
        <div>
            <h2>Name: {name}</h2>
            {
                products.map(product => <ProductsCard
                    key={products._id}
                    product={product}
                ></ProductsCard>)
            }
        </div>
    );
};

export default CategoryProduct;