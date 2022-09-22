import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { createMessage: createMessage},
      dispatch
    );
  }

  function mapReduxStateToProps(reduxState) {
    return {
      currentUser: reduxState.currentUser,
      selectedChannel: reduxState.selectedChannel
    }
  }

  export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageForm);
