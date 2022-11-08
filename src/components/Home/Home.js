import React from 'react';
import Banner from './Banner';
import Gallary from './Gallary';
import HomeService from './HomeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;