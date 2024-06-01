import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './_utils/router';

export const PlaygroundComponent = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};