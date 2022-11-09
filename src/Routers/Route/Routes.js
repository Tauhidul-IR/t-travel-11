import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../../components/Blogs/Blogs';
import Home from '../../components/Home/Home';
import Review from '../../components/Review/Review';
import ServiceDetails from '../../components/Services/ServiceDetails';
import Services from '../../components/Services/Services';
import SingleService from '../../components/Services/SingleService';
import Main from '../../layout/Main';
import Login from '../../Resister/Login';
import SignUp from '../../Resister/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;