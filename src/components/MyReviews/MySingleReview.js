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


{/* <div className=" my-6">

<div>
    <h1 className='text-2xl font-bold'>{serviceName}</h1>

    {
        user?.photoURL ? <figure><img className='w-16 h-16 rounded my-7' src={user?.photoURL
        } alt="user" /></figure> : <><figure><img className='w-16 h-16 rounded my-7' src='' alt="No img" /></figure> </>
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
</div> */}