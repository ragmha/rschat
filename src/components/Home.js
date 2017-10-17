import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../actions';

class Home extends Component {
  handleLogin = e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username && 0 < username.length) {
      this.props.dispatch(login({ username }));
    }
  };

  render() {
    return (
      <div>
        <div style={{ flex: 1 }} />
        <form onSubmit={this.handleLogin}>
          <label>
            User: <input id="username" type="text" name="name" />{' '}
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div style={{ flex: 1 }} />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
