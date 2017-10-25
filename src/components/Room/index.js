import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Grid } from 'semantic-ui-react';

import UserList from '../User/UserList';
import Message from '../Message';

const logo =
  'https://cdn.codemate.com/wp-content/uploads/2016/02/C-icon-codemate.png';

class Room extends Component {
  state = { activeItem: 'home' };

  renderMenu() {
    const { activeItem } = this.state;
    const { logout } = this.props;

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
            onClick={logout}
          />
        </Menu.Menu>
      </Menu>
    );
  }

  renderUsers() {
    const { users } = this.props;
    return Object.keys(users).map((user, i) => (
      <UserList user={user} key={i} index={i} />
    ));
  }

  render() {
    return (
      <div>
        <div>{this.renderMenu()}</div>
        <Grid>
          <Grid.Column width={5}>{this.renderUsers()}</Grid.Column>
          <Grid.Column width={9}>
            <Message />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Room);
