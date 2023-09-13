import Image from 'next/image';
import React, { useState } from 'react';
import arcade from '../../../public/icon-arcade.svg';
import advanced from '../../../public/icon-advanced.svg';
import pro from '../../../public/icon-pro.svg'
import './SelectPlan.css';

function SelectPlan({setCurrentStep}:any) {

  const [selectedPlan, setSelectedPlan] = useState<String>()
  const [durationPlan, setDurationPlan] = useState<String>('Monthly')

  const handleStep = (step:any)=>{
    if(selectedPlan && step == 1){
      setCurrentStep(3)
    }else if(selectedPlan || selectedPlan == null && step == 0){
      setCurrentStep(1)
    }
  }
  const handleDuration = (duration:any)=>{
    setSelectedPlan('')
    if(duration.target.checked){
      setDurationPlan('Yearly');
    }else{
      setDurationPlan('Monthly')
    }
  }

  console.log(selectedPlan)
  return (
    <main>
      <aside>
        <h1>Select your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </aside>
      {
        durationPlan == 'Monthly' ?
      <section className='planCards'>
      
        { selectedPlan == 'ArcadeMonthly' ? 
          <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('ArcadeMonthly')}>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>  
        </div>
        :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ArcadeMonthly')}>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>  
        </div>

        }
        { selectedPlan == 'AdvancedMonthly' ?
          <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('AdvancedMonthly')}>
          <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
          <div>
            <h4>Advanced</h4>
            <p>$12/mo</p>
          </div>
        </div>
         :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('AdvancedMonthly')}>
        <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
        <div>
          <h4>Advanced</h4>
          <p>$12/mo</p>
        </div>
      </div>
        }
        { selectedPlan == 'ProMonthly'?
        <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('ProMonthly')}>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </div>
        :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ProMonthly')}>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </div>
        }
      </section>
      : durationPlan == 'Yearly' ? 
      <section className='planCards'>
      
        { selectedPlan == 'ArcadeYearly' ? 
          <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('ArcadeYearly')}>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$90/yr</p>
            <p className='selectPlanMonthsFree'>2 months free</p>
          </div>  
        </div>
        :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ArcadeYearly')}>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$90/yr</p>
            <p className='selectPlanMonthsFree'>2 months free</p>
          </div>  
        </div>

        }
        { selectedPlan == 'AdvancedYearly' ?
          <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('AdvancedYearly')}>
          <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
          <div>
            <h4>Advanced</h4>
            <p>$120/yr</p>
            <p className='selectPlanMonthsFree'> 2 months free</p>
          </div>
        </div>
         :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('AdvancedYearly')}>
        <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
        <div>
          <h4>Advanced</h4>
          <p>$120/yr</p>
          <p className='selectPlanMonthsFree'>2 months free</p>
        </div>
      </div>
        }
        { selectedPlan == 'ProYearly'?
        <div className='selectPlanCardSelected' onClick={()=>setSelectedPlan('ProYearly')}>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$150/yr</p>
            <p className='selectPlanMonthsFree'>2 months free</p>
          </div>
        </div>
        :
        <div className='selectPlanCard' onClick={()=>setSelectedPlan('ProYearly')}>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$150/yr</p>
            <p className='selectPlanMonthsFree'>2 months free</p>
          </div>
        </div>
        }
      </section>
      : <></>
      }
      <aside className='selectPlanYrlyMonthly'>
        <p className='selectPlanMonthlyToggle' id={durationPlan == 'Monthly' ? 'selectPlanMonthlyToggleSelected': ''}>Monthly</p>
        <label className="selectPlanDuration" >
          <input type="checkbox" onClick={(e)=>handleDuration(e)}/>
          <span className="slider round"></span>
        </label>
        <p className='selectPlanYearlyToggle' id={durationPlan == 'Yearly' ? 'selectPlanYearlyToggleSelected': ''}>Yearly</p>
      </aside>
      <aside className='selectPlanButtons'>
        <button className='selectPlanGoBackStep' onClick={()=>handleStep(0)}>Go Back</button>
        <button className='selectPlanNextStepButton'onClick={()=>handleStep(1)}>Next Step</button>
      </aside>
    </main>
  )
}

export default SelectPlan