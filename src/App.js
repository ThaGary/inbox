import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar.jsx';
import MessageList from './components/messageList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [1,2,3]
    }
  }
async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({ messages: json });
}
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;