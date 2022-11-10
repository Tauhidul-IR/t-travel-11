import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MySingleReview from './MySingleReview';
import toast, { Toaster } from 'react-hot-toast';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const { user, logOutUser } = useContext(AuthContext);
    useTitle('myReviews')


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('t-travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOutUser();
                }

                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOutUser])



    //handle delete
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully.')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining)
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <div>
                {
                    reviews.length === 0 ? <> <h1 className='text-3xl font-bold mt-7'>No Review</h1></>
                        : <>
                            <h2 className='text-3xl font-bold mt-7'>Total review {reviews.length}</h2>
                            <div className="divider"></div>
                            <div className='grid grid-col-1 justify-center mb-10'>
                                {
                                    reviews.map(review => <MySingleReview
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
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