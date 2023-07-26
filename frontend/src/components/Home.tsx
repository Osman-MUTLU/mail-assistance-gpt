import React from 'react'
import {getMe } from '../utils/Axios';
import { User } from '../utils/Types';





function Home() {
    const [user, setUser] = React.useState<User>({});

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
            <h1>Merhaba {user?.displayName}</h1>
        </div>

    )

}

export default Home