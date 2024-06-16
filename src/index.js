import 'react-toastify/dist/ReactToastify.css';
import './utils/css/reset.css';
import './utils/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Login from './login/page-login';
import reportWebVitals from './reportWebVitals';
import HomePage from './home-page/home-page';
import RedefinePassword from './reset-password/redefine-password/page-redefine-password';
import ResetPassword from './reset-password/reset-password/page-reset-password';
import { ToastContainer } from 'react-toastify';
import UseRouteLogout from './utils/router-logout';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <UseRouteLogout />
    },
    {
        path: "/redefine-password",
        element: <RedefinePassword />,
    },
    {
        path: "/reset-password/:token/",
        element: <ResetPassword />,
    }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </React.StrictMode>
);
reportWebVitals();