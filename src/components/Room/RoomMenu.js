import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { logout } from '../../actions';

const logo =
  'https://cdn.codemate.com/wp-content/uploads/2016/02/C-icon-codemate.png';

class RoomMenu extends Component {
  state = { activeItem: 'home' };

  handleLogout = () => this.props.dispatch(logout());

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item>
          <img src={logo} alt="app-logo" />
        </Menu.Item>
        <Menu.Item name="home" active={activeItem === 'home'} />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default connect()(RoomMenu);
