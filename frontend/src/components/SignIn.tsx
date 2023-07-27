import { Login, MgtLogin } from '@microsoft/mgt-react';
import React from 'react'


function SignIn() {
  // check login status
  
  return (
    <div className='outlook-login'
      style={
        {
          display: 'inline-block',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'

        }
      } 
    >
      <Login className='login'/>
    </div>
  )
}

export default SignIn