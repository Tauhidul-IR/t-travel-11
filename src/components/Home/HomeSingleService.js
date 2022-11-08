import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleService = ({ service }) => {
    console.log(service)
    const { _id, image_url, title, details } = service;
    const info = details.slice(0, 100);
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='rounded h-60' src={image_url} alt="Shoes" /></figure>
                <div className="card-body mx-10">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='text-xl'>{`${info}...`}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/serviceDetails/${_id}`}><button className="btn btn-error">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleService;