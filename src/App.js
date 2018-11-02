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

messageSelected = async(id) => {
  console.log('messageSelected', id)

  let message = {
    messageIds: [id],
    command: "selected",
    "selected": true
  }

  const result = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.selected = !message.selected;
    }
    return message;
  })
  this.setState({
    messages: updatedMessages
  })
}

markAsRead = () => {
  console.log('markAsRead')
}

messageRead = async (id) => {
  console.log('messageRead', id)

  let message = {
    messageIds: [id],
    command: "read",
    "read": true
  }

  const result = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.read = !message.read;
    }
    return message;
  })
  this.setState({
    messages: updatedMessages
  })
}
  render() {
    return (
      <div className="App">
        <Toolbar markAsRead={this.markAsRead}/>
        <MessageList messages={this.state.messages} messageRead={this.messageRead} messageSelected={this.messageSelected}/>
      </div>
    );
  }
}

export default App;