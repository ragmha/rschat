import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import RoomMenu from './RoomMenu';
import UserList from '../User/UserList';
import Message from '../Message';

class Room extends Component {
  renderUsers() {
    const { users } = this.props;
    return Object.keys(users).map((user, i) => (
      <UserList user={user} key={i} index={i} />
    ));
  }

  render() {
    return (
      <div>
        <RoomMenu {...this.props} />
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
