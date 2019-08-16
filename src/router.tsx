import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerConfig from './routerConfig';

const AppRouter = () => (
    <BrowserRouter>
        {routerConfig.map(route => {
            console.log(route);
            return <Route path={route.path} key={route.key} component={route.component} />;
        })}
    </BrowserRouter>
);

export default AppRouter;
