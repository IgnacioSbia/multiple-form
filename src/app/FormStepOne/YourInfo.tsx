import React, { useEffect, useState } from 'react'
import './YourInfo.css'

function YourInfo({setCurrentStep}:any) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [number, setNumber] = useState('');
   const nameReg = /^[a-z ,.'-]+$/i
   const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   const phoneReg = /^\d+$/
   const [emailErr, setEmailErr] = useState<String>();
   const [nameErr, setNameErr] = useState<String>();
   const [phoneErr, setPhoneErr] = useState<String>();

   useEffect(()=>{
      setCurrentStep(1)
   },[1]);
   const nextStep = ()=>{
      //Here should go the validation for the name,mail and phone number
      if(nameReg.test(name) && emailReg.test(email) && phoneReg.test(number)){
         setCurrentStep(2)
         setEmailErr('');
         setNameErr('');
         setPhoneErr('');
      }else if(email == ''){
         setEmailErr('This field is required')
      }else{
         
      }
      

     
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
         <p className='personalInfoEmailError'>{emailErr}</p>
         <input name='email' placeholder='e.g stephenking@lorem.com' className='yourInfoInputs' id={ emailErr == 'This field is required' ? 'yourInfoInputsError' : '' } value={email} onChange={(e)=>setEmail(e.target.value)}/>
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