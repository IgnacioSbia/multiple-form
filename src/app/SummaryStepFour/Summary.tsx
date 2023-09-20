import React from 'react'
import './Summary.css'
function Summary() {
  return (
    <main>
        <div className='summaryTitle'>
            <h1 className='summaryMainTitle'>Finishing Up</h1>
            <p className='summarySubTitle'>Double-check everything looks OK before confirming.</p>
        </div>
        <section className='summaryDetails'>
            <aside className='summaryPlanType'>
              <h1>Arcade(Yearly)</h1>
              <button>change</button>

            </aside>
                <hr/>
            <aside>
              <h3>Total(per year)</h3>
            </aside>    
            
        </section>        


    </main>
  )
}

export default Summary