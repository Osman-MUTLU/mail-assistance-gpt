import { FC } from 'react'
import SignIn from './SignIn'
import NewChatButton from './NewChatButton'
import SidebarLink from './SidebarLink'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return <div className='sidebar'>
    <div className='sidebar-content'>
      <NewChatButton />
      <SidebarLink label='Send Email' href='/sendMail' icon={<SendIcon fontSize='medium'/>} />
      <SidebarLink label='Inbox' href='/inbox' icon={<AllInboxIcon fontSize='medium'/>} />
      <SidebarLink label='Agenda' href='/agenda' icon={<CalendarMonthIcon fontSize='medium'/>} />
    </div>
    
    <div className="sidebar-footer">
        <SignIn />
    </div>
  </div>
}

export default Sidebar