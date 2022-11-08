import React from 'react';

const Gallary = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mb-6'>Gallery</h1>
            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 mb-10'>

                <div className="card  w-full shadow-xl">
                    <img className='rounded' src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh_16x9.jpg?w=1200" alt="Shoes" />

                </div>
                <div className="card  w-full shadow-xl">
                    <img className='rounded' src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog4dKAKeKwaLG__IpVCQXRBfc84THl_hTO.jpg" alt="Shoes" />

                </div>
                <div className="card  w-full  shadow-xl">
                    <img className='rounded' src="https://sfd.susana.org/images/cities/Bandarban_Bangladesh.jpg" alt="Shoes" />

                </div>

            </div>
        </div>
    );
};

export default Gallary;