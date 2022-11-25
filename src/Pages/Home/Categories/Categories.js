import React from 'react';
import Yamaha from '../../../assets/Yamaha.png'
import Suzuki from '../../../assets/Suzuki.jpg'
import Pulsar1 from '../../../assets/Pulsar1.jpg'
import Category from './Category';

const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            name: 'Pulsar',
            description: 'adsauhdu',
            img: Pulsar1

        },
        {
            id: 2,
            name: 'Suzuki',
            description: 'adsauhdu',
            img: Suzuki

        },
        {
            id: 1,
            name: 'Yamaha',
            description: 'adsauhdu',
            img: Yamaha

        },
    ]

    return (
        <div>
            <div className='text-center my-16'>
                <h3 className='text-secondary text-2xl font-bold'>Categories</h3>
                <h2 className='text-4xl font-bold'>Brands You Look Out For</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto'>
                {
                    categoriesData.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;