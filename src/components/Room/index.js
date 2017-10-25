import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions';
import { Menu, Grid } from 'semantic-ui-react';

import RoomList from './RoomList';
import Message from '../Message';

const logo =
  'https://cdn.codemate.com/wp-content/uploads/2016/02/C-icon-codemate.png';

class Room extends Component {
  state = { activeItem: 'home' };

  renderMenu() {
    const { activeItem } = this.state;
    const { users, logout } = this.props;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item>
            <img src={logo} alt="app-logo" />
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={logout}
            />
          </Menu.Menu>
        </Menu>
        <Grid>
          <Grid.Column width={4}>
            <Grid.Row>
              <div className="userList">
                {Object.keys(users).map((user, i) => (
                  <RoomList user={user} key={i} index={i} />
                ))}
              </div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={9}>
            <Grid.Row>
              <div className="message">
                <Message />
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Room);
