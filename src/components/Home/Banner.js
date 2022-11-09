import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bannerImg">
                <div className="hero-overlay bg-opacity-60 bannerText"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Enjoy Vacation With <span className='text-black'>T-Travel</span></h1>

                        <p className="mb-5 text-xl">T-Travel is my own business with over 15 years experience in tourism Sector.</p>
                        <Link to={'/allServices'}><button className="btn btn-error text-xl font-bold">Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;