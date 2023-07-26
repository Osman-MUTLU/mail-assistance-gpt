import React from 'react'
import '../styles/PromptInput.css'
import SendIcon from '@mui/icons-material/Send';

const PromptInput = ({ }) => {
    const [prompt, setPrompt] = React.useState('')
    const sendPrompt = () => {
        console.log(prompt)
        setPrompt('')
    }
    return <div className='prompt-input'>
        <textarea className='prompt-input-textarea' placeholder='Type your prompt here...' value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
        <div className='prompt-input-attachment' onClick={sendPrompt}>
            <SendIcon/>
        </div>
    </div>
}

export default PromptInput