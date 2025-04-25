// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AccomodationDetails from './pages/AccomodationDetails';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'logement/:logementId',
                element: <AccomodationDetails />
            }
        ]
    }
]);

export default router;
