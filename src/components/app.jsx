import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from "../containers/message_list";
import logo from '../../assets/images/logo.svg';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src={logo} alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
