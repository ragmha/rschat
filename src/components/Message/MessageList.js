import React from 'react';
import { Comment } from 'semantic-ui-react';

const MessageList = ({ message }) => (
  <Comment>
    <Comment.Avatar src="https://robohash.org/meow" />
    <Comment.Content>
      <Comment.Author as="a">{message.username}</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>{message.text}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default MessageList;
