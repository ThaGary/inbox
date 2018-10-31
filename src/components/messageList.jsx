import React from 'react';
import '../App.css';
import Message from './message.jsx';

const MessageList = (props) => {
  return (
      props.messages.map(message => {
          return <Message />
      })
    );
}


export default MessageList;
