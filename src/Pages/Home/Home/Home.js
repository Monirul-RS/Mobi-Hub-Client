import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;