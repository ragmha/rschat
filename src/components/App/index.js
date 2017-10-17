import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../Login';
import Room from '../Room';

import { logout } from '../../actions';

class App extends Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { username } = this.props;
    let body;

    if (username) body = <Room logout={this.handleLogout} />;
    else body = <Login />;

    return <div>{body}</div>;
  }
}

const mapStateToProps = ({ app }) => ({
  ...app,
});

export default connect(mapStateToProps)(App);
