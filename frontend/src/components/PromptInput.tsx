import React from 'react'
import '../styles/PromptInput.css'
import SendIcon from '@mui/icons-material/Send';
import { sendPrompt } from '../utils/Axios';
import { FC } from 'react';
import RotateRightIcon from '@mui/icons-material/RotateRight';


interface PromptInputProps {
    setConverization: (conversation: any[]) => void;
}
const PromptInput: FC<PromptInputProps> = ({setConverization}) => {
    const [prompt, setPrompt] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const submit = () => {
        setLoading(true);
        sendPrompt(prompt).then((response) => {
            const answer = response.data.answer;
            if (response.data.expire_time !== ""){
                sessionStorage.setItem("expire_time", response.data.expire_time);
            }
            const conversation = JSON.parse(sessionStorage.getItem("conversation") || "[]");
            conversation.push({question: prompt, answer: answer});
            sessionStorage.setItem("conversation", JSON.stringify(conversation));
            setConverization(conversation);
            setPrompt("");
            setLoading(false);
        })
    }

    return <div className='prompt-input'>
        <textarea className='prompt-input-textarea' placeholder='Type your prompt here...' value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
        {
            loading===false? 
            <div className='prompt-input-attachment' onClick={submit}>
                <SendIcon/>
            </div>:
            <div className='prompt-input-attachment-loading'>
                <RotateRightIcon fontSize='medium' className='loading'/>
            </div>

        }
        
    </div>
}

export default PromptInput