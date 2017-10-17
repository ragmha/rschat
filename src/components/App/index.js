import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../Home';
import Room from '../Room';

import { logout } from '../../actions';

class App extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { username, connecting } = this.props;
    let body, right;

    if (username) {
      if (connecting) {
        body = (
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }} />
            <div>Connecting.....</div>
            <div style={{ flex: 1 }} />
          </div>
        );
      } else {
        body = <Room />;
      }
      right = (
        <button name="logout" onClick={this.handleLogout}>
          Logout
        </button>
      );
    } else {
      body = <Home />;
    }

    return (
      <div>
        <div>{right}</div>
        {body}
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  ...app,
});

export default connect(mapStateToProps)(App);
