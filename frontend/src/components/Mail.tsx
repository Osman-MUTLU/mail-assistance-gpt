import { FC } from 'react'
import { Message } from '../utils/Types'
import '../styles/Mail.css'

interface MailProps {
    massage: Message
}

const Mail: FC<MailProps> = ({ massage }) => {
    return (
        <div className='mail'>
            <div className='mail-header'>
                <div className='mail-header-sender'>
                    <div className='mail-header-sender-group'>
                        <div className='mail-header-sender-avatar'>
                            {massage.sender?.emailAddress.name[0]}
                        </div>
                        <div className='mail-header-sender-name'>
                            {massage.sender?.emailAddress.name}
                        </div>
                        <span className='mail-header-sender-email'>
                            ({massage.sender?.emailAddress.address})
                        </span>
                    </div>
                    <div className='mail-header-sender-date'>
                        {new Date(massage.receivedDateTime).toDateString()}
                    </div>
                </div>
                <div className='mail-header-title'>
                    {massage.subject}
                </div>
                <div className='mail-header-separator'></div>
                
            </div>
            <div className='mail-body'>
                <iframe srcDoc={massage.body.content}></iframe>
            </div>
        </div>
    )
}

export default Mail