import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { name, id, description, img } = category;
    return (
        <Link to='/login'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div></Link>
    );
};

export default Category;