import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './page/Home';
import Order from './page/Order';
import Profile from './page/Profile';
import Discover from './page/Discover';

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/home" component={App} />
    <Route path="/discover" component={Discover} />
    <Route path="/order" component={Order} />
    <Route path="/profile" component={Profile} />
  </BrowserRouter>
);

export default AppRouter;
