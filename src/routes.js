import React from 'react';
import Device from './views/pages/Device';
import HomePage from './views/pages/HomePage';
import UserPage from './views/pages/UserPage';
import { v4 as uuidv4 } from 'uuid';
import LoginPage from './views/pages/LoginPage';

const routes = [
    {
        name: 'Home Page',
        path: '/home-page',
        id: uuidv4(),
        component: <HomePage />
    },
    {
        name: 'User Page',
        path: '/user-page',
        id: uuidv4(),
        component: <UserPage />
    },
    {
        name: 'Device',
        path: '/device',
        id: uuidv4(),
        component: <Device />
    },
    {
        name: 'Login Page',
        path: '/login',
        id: uuidv4(),
        component: <LoginPage />
    },
];

export default routes;