import React from 'react'
import '../styles/PromptInput.css'
import SendIcon from '@mui/icons-material/Send';
import { sendPrompt } from '../utils/Axios';

const PromptInput = ({ }) => {
    const [prompt, setPrompt] = React.useState<string>('')
    const submit = () => {
        sendPrompt(prompt).then((res) => {
            console.log(res)
        })
        setPrompt('')
    }

    return <div className='prompt-input'>
        <textarea className='prompt-input-textarea' placeholder='Type your prompt here...' value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
        <div className='prompt-input-attachment' onClick={submit}>
            <SendIcon/>
        </div>
    </div>
}

export default PromptInput