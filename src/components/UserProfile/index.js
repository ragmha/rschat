import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import RoomMenu from '../Room/RoomMenu';
import Gallery from '../Gallery';
import CardProfile from '../Card/CardProfile';
import CardDescription from '../Card/CardDescription';
import CardContent from '../Card/CardContent';

import { logout } from '../../actions';

class UserProfile extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.history.push('/');
  }

  handleLogout = () => this.props.dispatch(logout());

  render() {
    const { user } = this.props;
    return (
      <div className="main">
        <RoomMenu logout={this.handleLogout} />
        <div className="main-col-1">
          <CardProfile header={user} />
          <Gallery />
        </div>
        <div className="main-col-2">
          <CardDescription />
          <CardContent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.app.username,
});

export default connect(mapStateToProps)(UserProfile);
