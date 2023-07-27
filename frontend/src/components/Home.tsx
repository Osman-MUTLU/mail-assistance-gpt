import React from 'react'
import {getMe } from '../utils/Axios';
import { User } from '../utils/Types';
import '../styles/Home.css'
import { useIsSignedIn } from '../utils/Session';



function Home() {
    const [user, setUser] = React.useState<User>({});
    const [isSignedIn] = useIsSignedIn();

    React.useEffect(() => {
        getMe().then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

        
    }
    , []);

    return (
        <div className='home'>
            {
                isSignedIn ? (
                    <div className='home-content'>
                        <div className='home-header'>
                            <h1>Welcome, {user.displayName}</h1>
                        </div>
                        <div className='home-body'>
                            <h2>Here are your emails</h2>
                        </div>
                    </div>
                ) : (
                    <div className='home-content'>
                        <div className='home-header'>
                            <h1>Welcome to the Outlook Clone</h1>
                        </div>
                        <div className='home-body'>
                            <h2>Please sign in to view your emails</h2>
                        </div>
                    </div>
                )
            }
        </div>
    )

}

export default Home