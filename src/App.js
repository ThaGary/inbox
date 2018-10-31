import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar.jsx';
import MessageList from './components/messageList.jsx';
import Message from './components/message.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
