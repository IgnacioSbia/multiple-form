import React, { useState } from 'react'
import './Addons.css';

function Addons() {
  const [selectedAddon, setSelectedAddon] = useState()

  return (
    <main className='addonsMain'>
      <div className='selectAddonsCells' id=''>
        <input type='checkbox' className='addonCheckbox'/>
        <aside className='selectAddonsTitles'>
         <h2 className='addonTitle'>Online Services</h2>
         <p className='addonSubTitle'>Acccess to multiplayer games</p>
        </aside>
        <p className='addonsPrice'>+$1/mo</p>
      </div>
      <div className='selectAddonsCells'>
        <input type='checkbox' className='addonCheckbox'/>
        <aside className='selectAddonsTitles'>
         <h2 className='addonTitle'>Online Services</h2>
         <p className='addonSubTitle'>Acccess to multiplayer games</p>
        </aside>
        <p className='addonsPrice'>+$1/mo</p>
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
    </main>
    
    )
}

export default Addons