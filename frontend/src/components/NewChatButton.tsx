import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGlobalProvider, useIsSignedIn } from '../utils/Session'

interface NewChatButtonProps {

}

const NewChatButton: FC<NewChatButtonProps> = ({ }) => {
  const navigator = useNavigate()
  const [isSignedIn] = useIsSignedIn();
  const handleClick = async () => {
    if (!isSignedIn) {
      getGlobalProvider().login?.();
    }
    else{
      navigator('/chat')
    }
  }
  return <div className='new-chat-button' onClick={handleClick}>
    New Chat
  </div>
}

export default NewChatButton