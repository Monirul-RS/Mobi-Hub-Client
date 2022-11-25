import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    }, [])

  
    return (
        <div>
            <div className='text-center my-16'>
                <h3 className='text-secondary text-2xl font-bold'>Categories</h3>
                <h2 className='text-4xl font-bold'>Brands You Look Out For</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;