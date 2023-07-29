import React from 'react'
import { getInbox } from '../utils/Axios';
import Mail from './Mail';
import { Message } from '../utils/Types';
import '../styles/Inbox.css'



function Inbox() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = React.useState<Message | null>(null);

  React.useEffect(() => {
    getInbox().then((response) => {
      setMessages(response.data.value);
      console.log(response.data.value);
    });
  }, []);



  return (
    <div className="inbox">
      <div className="message-list">
        <div className="message-list-header">
          <div className="message-list-header-title"><h3>INBOX</h3></div>
        </div>

        {
          messages.map((message: Message, index) => (
            <div className='message-list-item' key={index} onClick={() => setSelectedMessage(message)}>
              <div className="message-list-item-sender">
                <div className="message-list-item-sender-group">
                  <div className="message-list-item-sender-avatar">{message.sender?.emailAddress.name[0]}</div>
             
                  <div className="message-list-item-sender">
                    <div className="message-list-item-sender-name">{message.sender?.emailAddress.name}</div>
                    <div className="message-list-item-bodyPreview">{message.bodyPreview?.slice(0,70)}...</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="inbox-content">
        {
          selectedMessage ? <Mail massage={selectedMessage} /> : <div className="inbox-content-placeholder">Select a message to read</div>
        }
      </div>
    </div>
  )
}

export default Inbox