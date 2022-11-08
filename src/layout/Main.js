import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;