import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './index.css';
const img = 'https://robohash.org/meow';

class UserList extends Component {
  render() {
    const { user, index } = this.props;
    return (
      <Link to="/userProfile">
        <div className="userList">
          <List animated verticalAlign="middle" size="big" key={index}>
            <List.Item>
              <Image avatar src={img} />
              <List.Content>
                <List.Header>{user}</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </Link>
    );
  }
}

export default UserList;
