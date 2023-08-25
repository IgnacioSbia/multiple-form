import React from 'react'
import './YourInfo.css'

function YourInfo() {
  return (
    <>
     <h1>Personal info</h1>
     <p>Please provide your name, email adress, and phone number</p>
     <label className='personalInfoLabel'>Name</label>
     <div>
        <input name='Name' placeholder='e.g Stephen King'/>
     </div>
     <label className='personalInfoLabel'>Email Adress</label>
     <div>
        <input name='email' placeholder='e.g stephenking@lorem.com'/>
     </div>
     <label className='personalInfoLabel'>Phone Number</label>
     <div>
        <input name='phone' placeholder='e.g +1 234 567 890'/>
     </div>
     
     
    </>
  )
}

export default YourInfo