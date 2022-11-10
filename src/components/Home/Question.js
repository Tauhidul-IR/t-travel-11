import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center text-5xl font-bold'>Questions.??</h1>
                <div>
                    <div className="footer p-10  text-black justify-around">
                        <div>
                            <h4 className='text-2xl font-bold'>Our Office</h4>
                            <h5 className='text-xl font-bold'>savar</h5>
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold'>Contact Number</h4>
                            <h5 className='text-xl font-bold'>+880123456789</h5>
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold'>Email Us</h4>
                            <h5 className='text-xl font-bold'>t.travel@gmail.com</h5>
                        </div>

                    </div>
                </div>
                <div className="divider"></div>
                {/* ------------------ */}
                <div>
                    <div className="footer p-10  text-black justify-around">
                        <div>
                            <input type="text" placeholder="Name" className="input  input-bordered input-error w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Email" className="input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" className="input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <textarea className="textarea w-full textarea-error" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn btn-outline text-xl font-bold btn-error mb-6">Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default Question;