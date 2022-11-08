import React from 'react';
import Banner from './Banner';
import Gallary from './Gallary';
import HomeService from './HomeService';
import Question from './Question';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Gallary></Gallary>
            <Question></Question>
        </div>
    );
};

export default Home;