import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { _id, name, img } = category;
    return (
        <Link to={`/category/${_id}`}>
            <div className="card my- bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div></Link>
    );
};

export default Category;