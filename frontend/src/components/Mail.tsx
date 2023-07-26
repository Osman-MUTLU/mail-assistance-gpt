import { FC } from 'react'
import { Massage } from '../utils/Types'

interface MailProps {
    massage: Massage
}

const Mail: FC<MailProps> = ({ massage }) => {
    return (
        <div className='mail'>
            <h3>{massage.subject}</h3>
            <iframe style={
                {
                    width: '100%',
                    height: '500px'
                }
            } srcDoc={massage.body.content}></iframe>
        </div>
    )
}

export default Mail