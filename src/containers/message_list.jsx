import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 50000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render () {
    const messages = this.props.messages
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {messages.length ? messages.map((message, index) => <Message message={message} key={index} />): <p>No messages!</p>}
        </div>
        <MessageForm />
      </div>
      )
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { fetchMessages: fetchMessages},
      dispatch
    );
  }

  function mapReduxStateToProps(reduxState) {
    return {
      messages: reduxState.messages,
      selectedChannel: reduxState.selectedChannel
    }
  }

  export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
