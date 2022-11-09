import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)
    const { _id, image_url, title, details, price } = service;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl my-10">
                <figure><img className='rounded' src={image_url} alt="Shoes" /></figure>
                <div className="card-body mx-10 ">
                    <h2 className="font-bold text-4xl text-center">{title}</h2>
                    <h2 className='text-lg text-orange-400 font-extrabold'>Price : tk.{price}</h2>
                    <p className='text-xl'>{details}</p>
                    <div className="card-actions justify-center">
                        <h1 className='text-5xl'>If You Travel this place. please book me. I will give You the best service</h1>
                        <Link to={`#`}><button className="btn btn-error">Book Me</button></Link>
                    </div>
                </div>
            </div>

            {/* ---------------------- */}
            <div>
                <h1 className='text-5xl'>Clients Review</h1>
                <div>
                    <Link to={`/review/${_id}`}><button className="btn btn-error">Review</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;