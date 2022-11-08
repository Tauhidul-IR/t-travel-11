import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)
    // console.log(user)

    const handlelogout = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.error(error))
    }




    return (
        <div className="navbar text-black bg-rose-100 font-bold py-10 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-xl">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/allServices'}>Services</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        <li><Link to={'/singleService'}>single</Link></li>

                        {
                            user?.email ? <>
                                <li><Link to={''}>My reviews</Link></li>
                                <li><Link to={''}>Add service</Link></li>
                                <li><Link onClick={handlelogout}>Logout</Link></li>
                            </> :
                                <>
                                    <li><Link to={'/login'}>Login</Link></li>
                                    <li><Link to={'/signUp'}>Sign up</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost px-0 normal-case text-4xl">T-Travel</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/allServices'}>Services</Link></li>
                    <li><Link to={'/blogs'}>Blogs</Link></li>
                    <li><Link to={'/singleService'}>single</Link></li>
                    {
                        user?.email ? <>
                            <li><Link to={''}>My reviews</Link></li>
                            <li><Link to={''}>Add service</Link></li>
                            <li><Link onClick={handlelogout}>Logout</Link></li>
                        </> :
                            <>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/signUp'}>Sign up</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;