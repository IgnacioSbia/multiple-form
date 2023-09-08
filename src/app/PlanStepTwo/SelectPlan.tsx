import Image from 'next/image';
import React from 'react';
import arcade from '../../../public/icon-arcade.svg';
import advanced from '../../../public/icon-advanced.svg';
import pro from '../../../public/icon-pro.svg'
import './SelectPlan.css';

function SelectPlan() {
  return (
    <main>
      <aside>
        <h1>Select your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </aside>
      <section className='planCards'>
        <div className='selectPlanCard'>
          <Image src={arcade} alt='planOneImage' width={34} height={34}/>
          <div >
            <h4>Arcade</h4>
            <p>$9/mo</p>
          </div>  
        </div>
        <div className='selectPlanCard'>
          <Image src={advanced} width={34} height={34} alt='planTwoImage'/>
          <div>
            <h4>Advanced</h4>
            <p>$12/mo</p>
          </div>
        </div>
        <div className='selectPlanCard'>
          <Image src={pro} width={34} height={34} alt='planThreeImage'/>
          <div>
            <h4>Pro</h4>
            <p>$15/mo</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SelectPlan