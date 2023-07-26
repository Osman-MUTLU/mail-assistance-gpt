import React from 'react'
import { getInbox } from '../utils/Axios';
import Mail from './Mail';
import { Massage } from '../utils/Types';



function Inbox() {
    const [messages, setMessages] = React.useState<Massage[]>([]);

    React.useEffect(() => {
        getInbox().then((response) => {
            setMessages(response.data.value);
            console.log(response.data.value);
        });
    }, []);


  return (
    <div className="inbox">
      {
        messages.map((message: Massage) => (<>
            <hr />
            <Mail massage={message} />
            <hr />
          </>
        ))
      }
    </div>
  )
}

export default Inbox