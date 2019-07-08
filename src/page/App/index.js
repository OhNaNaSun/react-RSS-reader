import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import routerConfig from '../../routerConfig';

class App extends Component {
  state = {
    // TODO get current by index
    // current: homePages[0].key,
    current: 'home',
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        style={{ position: 'fixed', bottom: '0', width: '100%' }}
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {_.filter(routerConfig, { type: 'homePage' }).map(route => (
          <Menu.Item key={route.key}>
            <Link to={route.path}>
              <Icon type={route.icon} />
              {route.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
export default App;
