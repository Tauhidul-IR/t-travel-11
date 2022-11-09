import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('blogs')
    return (
        <div className='my-12'>
            <h1 className='text-4xl font-bold my-10'>Blogs Section</h1>
            <div>
                <div>
                    <h1 className='text-2xl my-5 font-bold'>Q-1.Difference between SQL and NoSQL</h1>
                    <h2 className='text-xl'><span className='font-bold'>ANS..</span> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h2>
                </div>
                <div>
                    <h1 className='text-2xl my-5 font-bold'>Q-2.What is JWT, and how does it work?</h1>
                    <h2 className='text-xl'><span className='font-bold'>ANS..</span>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).<br />
                        Work..Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key

                    </h2>
                </div>
                <div>
                    <h1 className='text-2xl my-5 font-bold'>Q-1.What is the difference between javascript and NodeJS?</h1>
                    <h2 className='text-xl'><span className='font-bold'>ANS..</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h2>
                </div>
                <div>
                    <h1 className='text-2xl my-5 font-bold'>Q-1.How does NodeJS handle multiple requests at the same time?</h1>
                    <h2 className='text-xl'><span className='font-bold'>ANS..</span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h2>
                </div>

            </div>
        </div>
    );
};

export default Blogs;