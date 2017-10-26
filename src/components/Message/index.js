import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';

import MessageList from './MessageList';
import { sendMessage } from '../../actions';

import './index.css';

class Message extends Component {
  handleMessage = e => {
    e.preventDefault();
    let message = this.message.value;
    this.props.dispatch(sendMessage(message));
    this.message.value = '';
  };

  renderMessageList() {
    const { messages } = this.props;
    console.log(messages);

    return messages.list
      .map(id => messages.entities[id])
      .map((message, i) => <MessageList key={i} message={message} />);
  }
  render() {
    return (
      <Comment.Group>
        <Header as="h2" dividing>
          Messages
        </Header>
        <div className="messageList" style={{}}>
          {this.renderMessageList()}
        </div>
        <Form reply>
          <Form.Field className="messageInput">
            <label>User Input</label>
            <input ref={txt => (this.message = txt)} />
          </Form.Field>
          <Button
            content="Send"
            labelPosition="right"
            icon="external"
            primary
            onClick={this.handleMessage}
          />
        </Form>
      </Comment.Group>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });

export default connect(mapStateToProps)(Message);
