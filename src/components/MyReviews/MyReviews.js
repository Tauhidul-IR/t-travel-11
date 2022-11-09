import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <div>
                {
                    reviews.length === 0 ? <> <h1>Not Review</h1></>
                        : <>
                            <h2>total review {reviews.length}</h2>
                            <div className='grid grid-col-1 justify-center mb-10'>
                                {
                                    reviews.map(review => <MySingleReview
                                        key={review._id}
                                        review={review}
                                    ></MySingleReview>)
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default MyReviews;