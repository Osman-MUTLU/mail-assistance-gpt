import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface NewChatButtonProps {
  
}

const NewChatButton: FC<NewChatButtonProps> = ({}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/chat')
  }
  return <div className='new-chat-button' onClick={handleClick}>
      New Chat
    </div>
}

export default NewChatButton