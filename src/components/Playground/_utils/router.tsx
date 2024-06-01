import { createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '../_components/Dashboard';
import { Layout } from '../_layout/Layout';
import { FaqList } from '../_components/FaqList/FaqList';

export const router = createBrowserRouter([
    {
        path: 'playground',
        element: <Layout />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'faq-list', element: <FaqList /> },
        ]
    }
]);