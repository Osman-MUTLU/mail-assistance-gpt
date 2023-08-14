import React from 'react'
import { Message, SendMailRequest } from '../utils/Types';
import { sendMail } from '../utils/Axios';
import '../styles/SendMail.css'

function SendMail() {
  const [to, setTo] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const handleSend = () => {
    let mail: SendMailRequest = {
      message: {
        subject: subject,
        body: {
          contentType: 'Text',
          content: message
        },
        toRecipients: [
          {
            emailAddress: {
              address: to
            }
          }
        ]
      },
      saveToSentItems: 'false'
    }
    sendMail(mail).then((response) => {
      console.log(response);
    });
  }
  return (
    <div className='mail-form'>
      <div className='mail-form-header'>
        <div className='mail-form-header-title'>
          New Message
        </div>
      </div>
      <form onSubmit={handleSend} >
        <div className='mail-form-body'>
          <div className='mail-form-body-field'>
            <input type='email' placeholder='To' className='mail-form-body-field-input' 
                    value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className='mail-form-body-field'>
            <input type='text' className='mail-form-body-field-input' placeholder='Subject' 
                    value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className='mail-form-body-field'>
            <textarea className='mail-form-body-field-input' placeholder='Message' 
                    value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className='mail-form-footer'>
            <button type='submit' className='mail-form-body-field-button'>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendMail


