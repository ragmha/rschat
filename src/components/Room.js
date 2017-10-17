import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

import { Image, List } from 'semantic-ui-react';

class Room extends Component {
  handleMessage = () => {
    const message = document.getElementById('room-message').value;
    this.props.dispatch(sendMessage({ message }));
  };

  renderList(type, i) {
    return (
      <List animated verticalAlign="middle" key={i}>
        <List.Item>
          <Image
            avatar
            src="//robohash.org/1234?set=set2&bgset=bg2&size=70x70"
          />
          <List.Content>
            <List.Header>{type}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    );
  }

  render() {
    const { users, messages } = this.props;
    return (
      <div>
        Room Component
        {Object.keys(users).map((user, i) => this.renderList(user, i))}
        <div style={{ flex: 1 }}>
          {messages.list
            .map(id => messages.entities[id])
            .map((m, i) => this.renderList(m, i))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, messages }) => ({ users, messages });

export default connect(mapStateToProps)(Room);
