import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData()
    console.log(review)
    const { _id, image_url, title, details, price } = review;
    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email || "Unregistered";

    }
    return (
        <div>
            <div className='text-center font-bold'>
                <h2 className='text-2xl'>Your Review on..</h2>
                <h2 className='text-4xl'>{title}</h2>
            </div>

            <div className='bg-slate-200 p-5 my-2'>
                <form onSubmit={handleSubmitReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered    w-full " />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered   w-full " required />
                        <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered    w-full " readOnly />
                    </div>
                    <textarea name='message' className="textarea w-full my-4 h-60" placeholder="Your Message"></textarea>
                    <input className="btn btn-error w-full" type="submit" value="Submit Your Review" />
                </form>

            </div>
        </div>
    );
};

export default Review;