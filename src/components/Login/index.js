import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions';

class Login extends Component {
  handleLogin = e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username && 0 < username.length) {
      this.props.dispatch(login({ username }));
    }
  };

  render() {
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
          height: 100%
      }
        `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center" icon>
              <Image src="https://cdn.codemate.com/wp-content/uploads/2016/02/C-icon-codemate.png" />
              <br />
              🐈 Project X Meow
            </Header>
            <Form size="large" onSubmit={this.handleLogin}>
              <Segment stacked>
                <Form.Input
                  id="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                />
                <Button color="teal" fluid size="large">
                  Enter
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        <footer
          style={{
            textAlign: 'center',
            height: '100%',
            verticalAlign: 'middle',
          }}
        >
          © Meowify.Inc
        </footer>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
