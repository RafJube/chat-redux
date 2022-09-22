import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createChannel } from '../actions';

class NewChannel extends Component {
  handleClick = () => {
    const newChannel = prompt("What's the name of the new channel?", `channel${Math.floor(10 + (Math.random() * 90))}`)
    this.props.createChannel(newChannel);
  }


  render() {
    return (
        <h1 className='new-channel' onClick={this.handleClick}>+</h1>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createChannel: createChannel},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(NewChannel);
