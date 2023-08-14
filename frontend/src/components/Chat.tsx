import React from 'react'
import '../styles/Chat.css'
import PromptInput from './PromptInput'

function Chat() {
  const [conversation, setConversation] = React.useState<any[]>([])

  React.useEffect(() => {
    const conversation = JSON.parse(sessionStorage.getItem("conversation") || "[]");
    setConversation(conversation);
  }, [])
  
  return (
    <div className="container">
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header-title">
            <h1>Mail Assitance</h1>
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
            <PromptInput setConverization = {setConversation} />
        </div>
      </div>
    </div>
  )
}

export default Chat