import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Dashboard } from './_components/Dashboard';
import { Layout } from './_layout/Layout';
import { Component } from './_components/Component';

const router = createBrowserRouter([
    {
        path: 'playground',
        element: <Layout />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: '1', element: <Component /> },
            { path: '2', element: <Component /> }
        ]
    }
]);

export const Playground = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};