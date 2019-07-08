import Home from './page/Home';
import Order from './page/Order';
import Profile from './page/Profile';
import Discover from './page/Discover';
import App from './page/App';

export default [
  {
    key: 'app',
    path: '/',
    component: App,
  },
  {
    key: 'home',
    path: 'home',
    component: Home,
    icon: 'home',
    label: '首页',
    type: 'homePage',
  },
  {
    key: 'order',
    path: 'order',
    component: Order,
    icon: 'book',
    label: '订单',
    type: 'homePage',
  },
  {
    key: 'profile',
    path: 'profile',
    component: Profile,
    icon: 'profile',
    label: '我的',
    type: 'homePage',
  },
  {
    key: 'discover',
    path: 'discover',
    component: Discover,
    icon: 'compass',
    label: '发现',
    type: 'homePage',
  },
];
