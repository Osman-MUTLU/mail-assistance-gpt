import React from 'react'
import '../styles/Chat.css'
import PromptInput from './PromptInput'

function Chat() {
  const conversation = [
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
  ]

  return (
    <div className="container">
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header-title">
            <h1>MailGBT</h1>
          </div>
        </div>
        <div className="chat-body">
          {conversation.map((item, index) => {
            return <div className="chat-body-item" key={index}>
              <div className="chat-body-item-question">
                <h4>{item.question}</h4>
              </div>
              <div className="chat-body-item-answer">
                <p>{item.answer}</p>
              </div>
              </div>
          }
          )}
        </div>
        <div className="chat-footer">
            <PromptInput />
        </div>
      </div>
    </div>
  )
}

export default Chat