import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSingleService from './HomeSingleService';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services)

    return (
        <div>
            <div className='my-24'>
                <h1 className='text-4xl font-bold my-10'>Services</h1>
                <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 mb-10'>
                    {
                        services.map(service => <HomeSingleService
                            key={service._id}
                            service={service}
                        ></HomeSingleService>)
                    }

                </div>
                <Link to={'/allServices'}><button className="btn btn-outline btn-error">See more</button></Link>
            </div>
        </div>
    );
};

export default HomeService;