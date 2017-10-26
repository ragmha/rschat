import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Room from './Room';

import { logout } from '../actions';

class App extends Component {
  handleLogout = () => this.props.dispatch(logout());

  render() {
    const { username } = this.props;
    let main;

    username
      ? (main = <Room logout={this.handleLogout} />)
      : (main = <Login />);

    return <div>{main}</div>;
  }
}

const mapStateToProps = ({ app }) => ({
  ...app,
});

export default connect(mapStateToProps)(App);
