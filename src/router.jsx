import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AccomodationDetails from './pages/AccomodationDetails';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Layout><Home /></Layout>
            },
            {
                path: 'about',
                element: <Layout><About /></Layout>
            },
            {
                path: 'logement/:logementId',
                element: <Layout><AccomodationDetails /></Layout>
            },
            {
                path: '/404',
                element: <Error404 />
              }
              
        ]
    }
]);

export default router;
