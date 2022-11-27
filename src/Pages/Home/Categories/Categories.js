import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category from './Category';


const Categories = () => {

    const { data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center my-16'>
                <h3 className='text-secondary text-2xl font-bold'>Categories</h3>
                <h2 className='text-4xl font-bold'>Brands You Look Out For</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto  mb-8'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;