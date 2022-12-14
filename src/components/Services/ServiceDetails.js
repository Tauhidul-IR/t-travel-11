import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReview from './AllReview';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData()
    // console.log(service)
    const { _id, image_url, title, details, price } = service;
    useTitle('serviceDetails')


    useEffect(() => {
        fetch(`https://t-travel-server.vercel.app/reviewsServiceName?serviceName=${service?.title}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service?.title])
    console.log(reviews)

    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl my-10">
                <figure><img className='rounded' src={image_url} alt="Shoes" /></figure>
                <div className="card-body mx-10 ">
                    <h2 className="font-bold text-4xl text-center">{title}</h2>
                    <h2 className='text-lg text-orange-400 font-extrabold'>Price : tk.{price}</h2>
                    <p className='text-xl'>{details}</p>
                    <div className="card-actions justify-left">
                        <h1 className='text-2xl font-bold text-green-600'>If You Travel this place. please book me. I will give You the best service</h1>
                        <Link to={`#`}><button className="btn btn-error text-xl font-bold">Book Me</button></Link>
                    </div>
                </div>
            </div>

            {/* ---------------------- */}
            <div>
                <h1 className='text-5xl'>Clients Review</h1>
                <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                    {
                        reviews.length === 0 ?
                            <> <h2 className='text-5xl text-center font-bold my-10'>No Review</h2></>
                            : <>
                                {
                                    reviews.map(review => <AllReview
                                        key={review._id}
                                        review={review}
                                    ></AllReview>)
                                }
                            </>
                    }
                </div>
                {/* ------------- */}
                <div className='mb-10'>
                    {
                        user?.email ? <Link to={`/review/${_id}`}><button className="btn btn-error">Add Review</button></Link> :
                            <>
                                <h2 className='text-2xl'>Please Login first to add review <Link to={`/login`}><button className="btn btn-error">login</button></Link> </h2>
                            </>
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;