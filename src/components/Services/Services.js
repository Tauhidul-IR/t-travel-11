import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useTitle('services')

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading ? <button className="btn loading">loading</button> : <>
                    <div className='my-24'>
                        <h1 className='text-4xl font-bold my-10'>Services</h1>
                        <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                            {
                                services.map(service => <SingleService
                                    key={service._id}
                                    service={service}
                                ></SingleService>)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Services;