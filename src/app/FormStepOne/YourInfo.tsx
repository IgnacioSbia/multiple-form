import React, { useEffect, useState } from 'react'
import './YourInfo.css'

function YourInfo({setCurrentStep}:any) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [number, setNumber] = useState('');
   const nameReg = /^[a-z ,.'-]+$/i

   useEffect(()=>{
      setCurrentStep(1)
   },[1]);
   const nextStep = ()=>{
      //Here should go the validation for the name,mail and phone number
      if(nameReg.test(name)){
         console.log("true")
      }

      setCurrentStep(2)
   }
   console.log(email)

  return (
    <>
    <main className='yourInfo'>
      <h1 className='yourInfoTitle'>Personal info</h1>
      <p className='yourInfoSubTitle'>Please provide your name, email adress, and phone number</p>
      <label className='personalInfoLabel'>Name</label>
      <div>
         <input name='Name' placeholder='e.g Stephen King' className='yourInfoInputs' onChange={(e)=>setName(e.target.value)}/>
      </div>
      <label className='personalInfoLabel'>Email Adress</label>
      <div>
         <input name='email' placeholder='e.g stephenking@lorem.com' className='yourInfoInputs' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <label className='personalInfoLabel'>Phone Number</label>
      <div>
         <input name='phone' placeholder='e.g +1 234 567 890' className='yourInfoInputs' onChange={(e)=>setNumber(e.target.value)}/>
      </div>
      <button className='nextStepButton' onClick={nextStep}>Next Step</button>
     </main>
    </>
  )
}

export default YourInfo