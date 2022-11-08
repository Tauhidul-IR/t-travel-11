import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = () => {
    return (
        <div>
            <div className='my-24'>
                <h1 className='text-4xl font-bold my-10'>Services</h1>
                <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='rounded' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body mx-10">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-error">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='rounded' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body mx-10">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-error">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className='rounded' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body mx-10">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-error">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <Link to={'/services'}><button className="btn btn-outline btn-error">See more</button></Link>
            </div>
        </div>
    );
};

export default HomeService;