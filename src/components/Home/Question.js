import React, { useState } from 'react';
import emailjs from "emailjs-com"

const Result = () => {
    return (
        <p className='text-green-600'>Your message has been successfully sent.</p>
    )
}

const Question = () => {
    const [result, setResult] = useState(false)

    const handlesendEmail = event => {
        event.preventDefault()
        const form = event.target;
        console.log(form.email.value);

        emailjs.sendForm('service_scgvy7j', 'template_sxfe9m7', event.target, '8SiKyRNnNeddMkP4l')
            .then(res => {
                console.log(res);
                setResult(true)

            })
            .catch(error => {
                console.log(error)

            })
        form.reset()

    }

    setTimeout(() => {
        setResult(false)
    }, 5000)



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
                <form onSubmit={handlesendEmail}>
                    <div className="footer p-10  text-black justify-around">
                        <div>
                            <input type="text" name="name" placeholder="Name" required className="input  input-bordered input-error w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Email" name='email' required className="input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" className="input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <textarea className="textarea w-full textarea-error" name='message' required placeholder="Your Message"></textarea>
                    </div>
                    {/* <input type="submit" className="btn btn-outline text-xl font-bold btn-error mb-6">Send Message</input> */}
                    <input className='btn btn-outline text-xl font-bold btn-error mb-6' type="submit" value="Send message" />
                    {
                        result ? <Result /> : null
                    }
                </form>

            </div>
        </div>
    );
};

export default Question;