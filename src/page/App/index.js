import React, { Component } from 'react';
import {
  Tabs, Layout, Row, Col, Menu, Icon,
} from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
const { Footer } = Layout;

class App extends Component {
  state = {
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
        <Menu.Item key="home">
          <Link to="home">
            <Icon type="home" />
            首页
          </Link>
        </Menu.Item>
        <Menu.Item key="discover">
          <Link to="discover">
            <Icon type="compass" />
            发现
          </Link>
        </Menu.Item>
        <Menu.Item key="order">
          <Link to="order">
            <Icon type="book" />
            订单
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="profile">
            <Icon type="profile" />
            我的
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default App;
