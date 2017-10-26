import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import RoomMenu from '../Room/RoomMenu';
import Gallery from '../Gallery';
import CardProfile from '../Card/CardProfile';
import CardDescription from '../Card/CardDescription';
import CardContent from '../Card/CardContent';

class UserProfile extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.history.push('/');
  }

  render() {
    const { user } = this.props;
    return (
      <div className="main">
        <RoomMenu />
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
