import YourInfo from "./FormStepOne/YourInfo";


export default function Home() {
  return (

    <main className="mainForm">
     <aside className="formSteps">
      <div>
        <h4>STEP 1</h4>
        <h1>YOUR INFO</h1>
      </div>
      <div>
        <h4>STEP 2</h4>
        <h1>SELECT PLAN</h1>
      </div> 
      <div>
        <h4>STEP 3</h4>
        <h1>ADD-ONS</h1>  
      </div> 
      <div>
        <h4>STEP 4</h4>
        <h1>SUMMARY</h1>
      </div>
     </aside>
     <aside>
      <YourInfo/>
     </aside>
    </main>
  )
}
