import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Claim from '../Claim/Claim';
import Mission from '../Mission/Mission';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Categories></Categories>
            <Mission></Mission>
            <Claim></Claim>
        </div>
    );
};

export default Home;