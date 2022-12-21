import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    console.log(service)
    const { _id, image_url, title, details, price } = service;
    const info = details.slice(0, 120);


    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                        <figure><img className='rounded h-60' src={image_url} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body mx-10">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='text-xl  text-left'>{`${info}...`}</p>
                    <h2 className='text-lg font-bold'>Price : {price}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/serviceDetails/${_id}`}><button className="btn btn-error text-xl font-bold">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleService;