import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import googleLogo from '../image/google.png'

const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('login successSully')
                form.reset();
                navigate(from, { replace: true })
            })


    }

    const handleGoogle = () => {
        googleSignIn()
            .then(() => { })
            .catch(error => console.error(error))
    }





    return (
        <div className='container'>
            <div className="hero w-full my-20">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <Link ><img onClick={handleGoogle} className='w-8 h-8' src={googleLogo} alt="" /></Link>


                        </div>
                    </div>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-500 font-bold' to={'/signup'}>Sign Up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;