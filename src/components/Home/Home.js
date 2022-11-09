import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner';
import Gallary from './Gallary';
import HomeService from './HomeService';
import Question from './Question';

const Home = () => {
    useTitle('home')
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