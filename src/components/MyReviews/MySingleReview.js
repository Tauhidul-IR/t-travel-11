import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MySingleReview = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext)
    console.log(review)
    const { _id, serviceName, client, email, message, service } = review;
    console.log(serviceName, client, email)


    return (
        <div>
            <div className="card sm:w-auto bg-base-100 shadow-xl my-6">
                <div className=" my-6">

                    <div className='px-4'>
                        <h1 className='text-2xl font-bold'>{serviceName}</h1>
                        <h2 className='text-xl font-bold'>Reviewer: {client}</h2>
                        <p className='text-lg'><span className='font-bold'>Review : </span>{message}</p>
                    </div>
                    <div className="card-actions flex flex-col items-center justify-center">
                        {/* update btn  */}
                        <button className="btn btn-error">Update</button>
                        {/* delete btn  */}
                        <button onClick={() => handleDelete(_id)} className="btn btn-error">X</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MySingleReview;


