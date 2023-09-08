import Image from 'next/image';
import React, { useState } from 'react';
import arcade from '../../../public/icon-arcade.svg';
import advanced from '../../../public/icon-advanced.svg';
import pro from '../../../public/icon-pro.svg'
import './SelectPlan.css';

function SelectPlan({setCurrentStep}:any) {

  const [selectedPlan, setSelectedPlan] = useState<String>('')
  
  const handleStep = ()=>{
    if(selectedPlan){
      setCurrentStep(3)
    }
  }

  console.log(selectedPlan)
  return (
    <main>
      <aside>
        <h1>Select your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </aside>
      <section className='planCards'>
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ArcadeMonthly')}>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>  
        </div>
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('AdvancedMonthly')}>
          <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
          <div>
            <h4>Advanced</h4>
            <p>$12/mo</p>
          </div>
        </div>
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ProMonthly')}>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </div>
      </section>
      <aside className='selectPlanButtons'>
        <button className='selectPlanGoBackStep'>Go Back</button>
        <button className='selectPlanNextStepButton'>Next Step</button>
      </aside>
    </main>
  )
}

export default SelectPlan