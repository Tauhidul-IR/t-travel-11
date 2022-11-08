import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Services from '../../components/Services/Services';
import Main from '../../layout/Main';

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
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
])

export default router;