import { useState } from "react"
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo"
import Plan from "./components/Plan"
import AddOns from "./components/AddOns"
import Summary from "./components/Summary"


const App = () => {
  const [userInfo, setUserInfo  ] = useState({name:"", phone:"", email:""});
  const [plan, setPlan] = useState({name:"", cost:""});
  const [addons, setAddons  ] = useState([]);
  const [isMonthly, setIsMonthly  ] = useState(true);
  const [step, setStep] = useState(1);

  const changePlan = () =>{

  }
  const nextStep =(e)=>{
    e.preventDefault()
    if (step < 4) {
      setStep(prev => prev + 1)
    }
  }
  const prevStep =(e)=>{
    e.preventDefault()
    if (step > 1) {
      setStep(prev => prev - 1)
    }
  }

  return (
    <div className="grid grid-flow-col grid-cols-3 text-black bg-white p-4 gap-8 min-h-[80vh] rounded-2xl ">
      <Sidebar />
      <main className="col-span-2 rounded-2xl p-4 flex flex-col justify-between">
        <div className="content">
          {step === 1 && <PersonalInfo setUserInfo={setUserInfo} />}
          {step === 2 && <Plan setPlan = {setPlan} isMonthly={isMonthly} />}
          {step === 3 && <AddOns setAddons={setAddons} isMonthly={isMonthly} />}
          {step === 4 && <Summary changePlan={changePlan} />}
        </div>
        <div className="btns flex justify-between">
          <button className="btn" onClick={prevStep}>Back</button>
          <button className="btn" onClick={nextStep} >Next</button>
        </div>
      </main>
    </div>
  )
}

export default App