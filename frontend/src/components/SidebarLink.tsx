import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface SidebarLinkProps {
    label:string
    icon?:JSX.Element
    href:string
}

const SidebarLink: FC<SidebarLinkProps> = ({label,icon,href}) => {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator(href)
    }

  return <div className='sidebar-link' onClick={handleClick}>
        <div className='sidebar-link-content'>
            {
                icon && <div className='sidebar-link-icon'>
                    {icon}
                    </div>
            }
            <div className='sidebar-link-label'>
                {label}
            </div>
        </div>
    </div>      
}

export default SidebarLink