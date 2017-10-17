import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';

const RoomList = ({ user, index }) => (
  <Grid celled="internally">
    <Grid.Column floated="left" width={4}>
      <Grid.Row>
        <List animated verticalAlign="middle" size="big" key={index}>
          <List.Item>
            <Image avatar src="https://robohash.org/meow" />
            <List.Content>
              <List.Header>{user}</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

export default RoomList;
