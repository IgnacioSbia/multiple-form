import React, { useState } from 'react'
import './Addons.css';

function Addons() {
  const [selectedAddons, setSelectedAddons] = useState<any>([])
  const selectedPlan = localStorage.getItem('duration');


  const handleAddons = (check:any)=>{
    const addons:any = []
    if(check.target.checked){
      addons.push(check.target.name)
      setSelectedAddons([...addons, ...selectedAddons])
    }else if(check.target.checked == false){
      const updatedAddon = addons.filter((addon:any) => addon == check.target.name)
      setSelectedAddons(updatedAddon)
      console.log(updatedAddon)
    
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
          <input type='checkbox' className='addonCheckbox' name='Larger storage Monthly' onClick={(e)=>handleAddons(e)}/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Larger storage</h2>
          <p className='addonSubTitle'>Extra 1TB of cloud save</p>
          </aside>
          <p className='addonsPrice'>+$2/mo</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox'/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Customizable Profile</h2>
          <p className='addonSubTitle'>Custom theme on your profile</p>
          </aside>
          <p className='addonsPrice'>+$2/mo</p>
        </div>
        <aside className='selectAddonsButtonSection'>
          <button className='addonsGoBackButton'>Go back</button>
          <button className='addonsNextStepButton'>Next Step</button>
        </aside>
      </>
        : selectedPlan == 'Yearly' ? 
        <>
        <div className='selectAddonsCells' id=''>
          <input type='checkbox' className='addonCheckbox'/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Online Services</h2>
          <p className='addonSubTitle'>Acccess to multiplayer games</p>
          </aside>
          <p className='addonsPrice'>+$10/yr</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox'/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Online Services</h2>
          <p className='addonSubTitle'>Acccess to multiplayer games</p>
          </aside>
          <p className='addonsPrice'>+$20/mo</p>
        </div>
        <div className='selectAddonsCells'>
          <input type='checkbox' className='addonCheckbox'/>
          <aside className='selectAddonsTitles'>
          <h2 className='addonTitle'>Online Services</h2>
          <p className='addonSubTitle'>Acccess to multiplayer games</p>
          </aside>
          <p className='addonsPrice'>+$1/mo</p>
        </div>
        <aside className='selectAddonsButtonSection'>
          <button className='addonsGoBackButton'>Go back</button>
          <button className='addonsNextStepButton'>Next Step</button>
        </aside>
      </>
      : ''
      }
    </main>
    
    )
}

export default Addons