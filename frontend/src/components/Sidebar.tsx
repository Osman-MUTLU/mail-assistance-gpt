import { FC } from 'react'
import SignIn from './SignIn'
import NewChatButton from './NewChatButton'
import SidebarLink from './SidebarLink'
import SendIcon from '@mui/icons-material/Send';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../styles/Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigator = useNavigate()
  const handleLogoClick = () => {
    navigator('/')
  }
  return <div className='sidebar'>
    <div className='sidebar-header'>
        {/*<img style={{cursor:"pointer"}}src={Logo} alt='logo' onClick={handleLogoClick} />*/}
      </div>
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