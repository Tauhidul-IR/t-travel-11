import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllReview = ({ review }) => {
    // const { user } = useContext(AuthContext)
    const { _id, serviceName, client, email, message, service } = review;
    console.log(review)
    return (
        <div>
            <div className="card sm:w-auto bg-base-100 shadow-xl my-6">
                <div className=" my-6">

                    <div>
                        <h1 className='text-2xl font-bold'>{serviceName}</h1>

                        {
                            review?.photoURL ? <figure><img className='w-16 h-16 rounded my-7' src={review?.photoURL
                            } alt="user" /></figure> : <><figure><img className='w-16 h-16 rounded my-7' src='' alt="No img" /></figure> </>
                        }

                        <h2 className='text-2xl font-bold'>Reviewer: {client}</h2>
                        <h3 className='text-xg font-bold'>Reviewer Email : {email}</h3>
                        <p className='text-lg'><span className='font-bold'>Review :</span>{message}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllReview;