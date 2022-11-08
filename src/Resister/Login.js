import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../image/google.png'

const Login = () => {
    return (
        <div className='container'>
            <div className="hero w-full my-20">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <h2 className='pb-4 text-xl'>Login with</h2>
                        <div className='flex justify-around py-4'>
                            {/* <Link className='text-3xl'><FaGoogle></FaGoogle></Link>
                            <Link className='text-3xl'><FaGithub></FaGithub></Link>
                            <Link className='text-3xl'><FaFacebook></FaFacebook></Link> */}
                            <Link ><img className='w-8 h-8' src={googleLogo} alt="" /></Link>


                        </div>
                    </div>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-500 font-bold' to={'/signup'}>Sign Up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;