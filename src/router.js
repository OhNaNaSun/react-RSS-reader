import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import Order from './page/Order';
import Profile from './page/Profile';
import Discover from './page/Discover';
import App from './page/App';

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="home" component={Home} />
    <Route path="discover" component={Discover} />
    <Route path="order" component={Order} />
    <Route path="profile" component={Profile} />
  </BrowserRouter>
);

export default AppRouter;
