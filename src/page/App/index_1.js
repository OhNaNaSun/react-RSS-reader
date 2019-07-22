import React, { Component } from 'react';
import {
  Menu, Icon, Row, Col,
} from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import routerConfig from '../../routerConfig';

class App extends Component {
  homePages = _.filter(routerConfig, { type: 'homePage' });

  state = {
    current: this.homePages[0].key,
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
        <Row>
          {this.homePages.map(route => (
            <Menu.Item key={route.key}>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <Link to={route.path}>
                  <Icon type={route.icon} />
                  {route.label}
                </Link>
              </Col>
            </Menu.Item>
          ))}
        </Row>
      </Menu>
    );
  }
}
export default App;
