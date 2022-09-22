import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, fetchMessages } from '../actions';
import NewChannel from '../containers/new_channel';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render () {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => (
            <li
              key={channel}
              className={channel === this.props.selectedChannel ? 'active' : null}
              onClick={() => this.handleClick(channel)}
            >
              #{channel}
            </li>
          ))}
        </ul>
        <NewChannel />
      </div>
      );
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { selectChannel: selectChannel,
        fetchMessages: fetchMessages},
      dispatch
    );
  }

  function mapReduxStateToProps(reduxState) {
    return {
      selectedChannel: reduxState.selectedChannel,
      channels: reduxState.channels
    }
  }

  export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
