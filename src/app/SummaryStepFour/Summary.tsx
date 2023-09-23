import React from 'react'
import './Summary.css'
function Summary({choosenAddons}:any) {
  
  return (
    <main>
        <div className='summaryTitle'>
            <h1 className='summaryMainTitle'>Finishing Up</h1>
            <p className='summarySubTitle'>Double-check everything looks OK before confirming.</p>
        </div>
        <section className='summaryDetails'>
            <aside className='summaryPlanType'>
              <h1>Arcade(Yearly)</h1>
              <button className='summaryButton'>change</button>

            </aside>
                <hr/>
            <aside className='summaryDetails'>
              {
                choosenAddons.map((e:any)=>{
                  return <>
                  <div className='summaryAddons'>
                  <p>{e}</p>
                  <p>{e.includes('Monthly') && e.includes('Online Services') ? '+$1/mo' : e.includes('Yearly') && e.includes('Online Services')? '+$10/yr' : e.includes('Monthly') ? '+$2/mo' : '+$20/yr' }</p>
                </div></>

                })
              }
            </aside>
            
        </section>        
        <aside>
              <h3>Total(per year)</h3>
            </aside> 

    </main>
  )
}

export default Summary