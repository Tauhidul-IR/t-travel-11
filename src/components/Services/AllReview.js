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
                            // user?.photoURL ? <figure><img className='w-16 h-16 rounded my-7' src={user?.photoURL
                            // } alt="user" /></figure> : <><figure><img className='w-16 h-16 rounded my-7' src='' alt="No img" /></figure> </>
                        }

                        <h2 className='text-2xl font-bold'>Reviewer: {client}</h2>
                        <h3 className='text-xg font-bold'>Reviewer Email : {email}</h3>
                        <p className='text-lg'>{message}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;