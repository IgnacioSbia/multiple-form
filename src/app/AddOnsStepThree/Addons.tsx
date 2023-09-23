import React, { useState } from 'react'
import './Addons.css';

function Addons({setCurrentStep, setChoosenAddons}:any) {
  const [selectedAddons, setSelectedAddons] = useState<any>([])
  const selectedPlan = localStorage.getItem('duration');


  const handleAddons = (check:any)=>{
    const addonName = check.target.name;

    if (check.target.checked) {
      // If checkbox is checked, add the addon to selectedAddons
      setSelectedAddons([...selectedAddons, addonName]);
    } else {
      // If checkbox is unchecked, remove the addon from selectedAddons
      const updatedAddons = selectedAddons.filter((addon: any) => addon !== addonName);
      setSelectedAddons(updatedAddons);
    }
  }
  const handleStep = (option:any)=>{
    if(option == 1){
      setChoosenAddons(selectedAddons)
      setCurrentStep(4)
    }else if(option == 0){
      setCurrentStep(3)
    }
    
  }
  console.log(selectedAddons)

  return (
    <main className='addonsMain'>
      {selectedPlan == 'Monthly' ?
      <>
        <div className='selectAddonsCells' id=''>
          <input type='checkbox' className='addonCheckbox' name='Online Services Monthly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Online Services</h2>
          <p className='addonSubTitle'>Acccess to multiplayer games</p>
          </aside>
          <p className='addonsPrice'>+$1/mo</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox' name='Larger Storage Monthly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Larger storage</h2>
          <p className='addonSubTitle'>Extra 1TB of cloud save</p>
          </aside>
          <p className='addonsPrice'>+$2/mo</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox' name='Customizable Profile Monthly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Customizable Profile</h2>
          <p className='addonSubTitle'>Custom theme on your profile</p>
          </aside>
          <p className='addonsPrice'>+$2/mo</p>
        </div>
        <aside className='selectAddonsButtonSection'>
          <button className='addonsGoBackButton' onClick={()=>handleStep(0)}>Go back</button>
          <button className='addonsNextStepButton' onClick={()=>handleStep(1)}>Next Step</button>
        </aside>
      </>
        : selectedPlan == 'Yearly' ? 
        <>
        <div className='selectAddonsCells' id=''>
          <input type='checkbox' className='addonCheckbox' name='Online Services Yearly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Online Services</h2>
          <p className='addonSubTitle'>Acccess to multiplayer games</p>
          </aside>
          <p className='addonsPrice'>+$10/yr</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox' name='Larger Storage Yearly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Larger Storage</h2>
          <p className='addonSubTitle'>Extra 1TB of cloud save</p>
          </aside>
          <p className='addonsPrice'>+$20/yr</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox' name='Customizable Profile Yearly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Customizable Profile</h2>
          <p className='addonSubTitle'>Custom theme on your profile</p>
          </aside>
          <p className='addonsPrice'>+$20/yr</p>
        </div>
        <aside className='selectAddonsButtonSection'>
          <button className='addonsGoBackButton' onClick={()=>handleStep(0)}>Go back</button>
          <button className='addonsNextStepButton' onClick={()=>handleStep(1)}>Next Step</button>
        </aside>
      </>
      : ''
      }
    </main>
    
    )
}

export default Addons