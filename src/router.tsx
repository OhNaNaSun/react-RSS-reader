import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerConfig from './routerConfig';

const AppRouter: React.SFC = () => (
    <BrowserRouter>
        {routerConfig.map(route => {
            return <Route path={route.path} key={route.key} component={route.component} />;
        })}
    </BrowserRouter>
);

export default AppRouter;
