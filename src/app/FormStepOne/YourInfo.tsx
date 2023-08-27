import React from 'react'
import './YourInfo.css'

function YourInfo() {
  return (
    <>
    <main className='yourInfo'>
      <h1 className='yourInfoTitle'>Personal info</h1>
      <p className='yourInfoSubTitle'>Please provide your name, email adress, and phone number</p>
      <label className='personalInfoLabel'>Name</label>
      <div>
         <input name='Name' placeholder='e.g Stephen King' className='yourInfoInputs'/>
      </div>
      <label className='personalInfoLabel'>Email Adress</label>
      <div>
         <input name='email' placeholder='e.g stephenking@lorem.com' className='yourInfoInputs'/>
      </div>
      <label className='personalInfoLabel'>Phone Number</label>
      <div>
         <input name='phone' placeholder='e.g +1 234 567 890' className='yourInfoInputs'/>
      </div>
     
     </main>
    </>
  )
}

export default YourInfo