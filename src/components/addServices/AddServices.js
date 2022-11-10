import React from 'react';
import useTitle from '../../hooks/useTitle';
import toast, { Toaster } from 'react-hot-toast';


const AddServices = () => {

    useTitle('addServices')

    const handleSubmitService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const image_url = form.image_url.value;
        console.log(title, price, rating, details, image_url)

        const service = {
            title,
            rating,
            price,
            image_url,
            details

        }

        fetch('https://t-travel-server.vercel.app/addServices', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }



    return (
        <div>
            <div className='text-center font-bold my-10'>
                <h2 className='text-2xl'>Add Service.</h2>
            </div>

            <div className='bg-slate-200 p-5 my-2 sm:w-1/2 mx-auto'>
                <form onSubmit={handleSubmitService}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                        <input type="text" name='title' placeholder="Title" className="input input-bordered    w-full " required />
                        <input type="text" name='image_url' placeholder="PhotoURL" className="input input-bordered    w-full " required />
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered   w-full " required />
                        <input type="text" name='price' placeholder="Price" className="input input-bordered    w-full " required />
                    </div>
                    <textarea name='details' className="textarea w-full my-4 h-60" placeholder="Details"></textarea>
                    <input className="btn btn-error w-full" type="submit" value="Add Service" />
                </form>

            </div>
        </div>
    );
};

export default AddServices;