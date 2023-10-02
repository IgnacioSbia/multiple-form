'use client';
import YourInfo from "./FormStepOne/YourInfo";
import { use, useState } from 'react';
import SelectPlan from "./PlanStepTwo/SelectPlan";
import checkedButton from '../../public/checkedStep.svg';
import Image from "next/image";
import Addons from "./AddOnsStepThree/Addons";
import Summary from "./SummaryStepFour/Summary";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [choosenAddons, setChoosenAddons] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleStart = (step:any)=>{
    if(step<1){
      setCurrentStep(1)
    }else{ 
        alert('Woops, something went wrong!')
        setCurrentStep(0)
    }
  }
  console.log(selectedPlan)
  console.log(currentStep)
  return (

    <main className="mainForm">
     <aside className="formSteps">
      <div className="formStep">
        {
          currentStep == 1 ? 
         <button className="formStepButtonSelected">1</button>
         : currentStep < 1? <button className="formStepButton">1</button> 
         :<button className="formStepButton"><Image src={checkedButton} width={25} height={28} alt="checked"/></button>
        }
        <aside>
          <h4>STEP 1</h4>
          <h1>YOUR INFO</h1>
        </aside> 
      </div>
      <div className="formStep">
        {
          currentStep == 2 ? 
          <button className="formStepButtonSelected">2</button>
          : currentStep <2 ?  <button className="formStepButton">2</button>
          : <button className="formStepButton"><Image src={checkedButton} width={25} height={28} alt="checked"/></button>
        }
        
        <aside>
          <h4>STEP 2</h4>
          <h1>SELECT PLAN</h1>
        </aside>
      </div> 
      <div className="formStep">
      {
          currentStep == 3 ? 
          <button className="formStepButtonSelected">3</button>
          : currentStep <3 ?  <button className="formStepButton">3</button>
          : <button className="formStepButton"><Image src={checkedButton} width={25} height={28} alt="checked"/></button>
        }
        <aside>
          <h4>STEP 3</h4>
          <h1>ADD-ONS</h1>  
        </aside> 
      </div> 
      <div className="formStep">
        {
          currentStep == 4 ?
          <button className="formStepButtonSelected">4</button>
          : currentStep <3 ?  <button className="formStepButton">4</button>
          : <button className="formStepButton"><Image src={checkedButton} width={25} height={28} alt="checked"/></button>
        }
        <aside>
          <h4>STEP 4</h4>
          <h1>SUMMARY</h1>
        </aside>  
      </div>
     </aside>
     <aside>
      { currentStep == 1 ?
       <YourInfo setCurrentStep= {setCurrentStep} setNames={setName} setEmails={setEmail} setPhones={setPhone}/>
       : currentStep == 2 ?<SelectPlan setCurrentStep ={setCurrentStep} setSelectedsPlans ={setSelectedPlan}/>
       : currentStep == 3 ?<Addons setCurrentStep ={setCurrentStep} setChoosenAddons ={setChoosenAddons}/>
       : currentStep == 4 ?<Summary choosenAddons={choosenAddons} name={name} email={email} phone={phone} selectedPlan={selectedPlan}/>
       :
       <>
        <h1>Welcome!</h1>
        <button className="buttonStartForm" onClick={()=>handleStart(0)}>Start</button>
       </>
      }  
      </aside>
    </main>
  )
}
