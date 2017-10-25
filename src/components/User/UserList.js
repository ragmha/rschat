import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';

import './index.css';
const img = 'https://robohash.org/meow';

class UserList extends Component {
  handleUser = e => {};

  render() {
    const { user, index } = this.props;
    return (
      <div className="userList">
        <List animated verticalAlign="middle" size="big" key={index}>
          <List.Item onClick={this.handleUser}>
            <Image avatar src={img} />
            <List.Content>
              <List.Header>{user}</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default UserList;
