import React from 'react'
import '../styles/SendMail.css'

function SendMail() {
  return (
    <div className='mail-form'>
      <div className='mail-form-header'>
        <div className='mail-form-header-title'>
          New Message
        </div>
      </div>
      <div className='mail-form-body'>
        <div className='mail-form-body-field'>
          <div className='mail-form-body-field-label'>
            To
          </div>
          <input type='text' placeholder='To'  className='mail-form-body-field-input'/>
      
        </div>
        <div className='mail-form-body-field'>
          <div className='mail-form-body-field-label'>
            Subject
          </div>
          <input type='text' className='mail-form-body-field-input' placeholder='Subject'/>
            
        </div>
        <div className='mail-form-body-field'>
          <div className='mail-form-body-field-label'>
            Message
          </div>
          <textarea className='mail-form-body-field-input'placeholder='Message'/>
            
        </div>
      </div>
    </div>
  )
}

export default SendMail
