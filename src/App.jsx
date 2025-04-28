import { useState } from "react"
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo"
import Plan from "./components/Plan"
import AddOns from "./components/AddOns"
import Summary from "./components/Summary"


const App = () => {
  const [userInfo, setUserInfo  ] = useState({name:"", phone:"", email:""});
  const [plan, setPlan] = useState({name:"", cost:""});
  const [addons, setUserAddons  ] = useState([]);
  const [isMonthly, setIsMonthly  ] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <div className="grid grid-flow-col grid-cols-3 bg-white p-4 gap-8 min-h-[80vh] rounded-2xl ">
      <Sidebar />
      <main className="col-span-2 bg-amber-400 rounded-2xl">
        <div className="content">
          {step === 1 & <PersonalInfo />}
          {step === 2 & <Plan />}
          {step === 3 & <AddOns />}
          {step === 4 & <Summary />}
      </div>
      </main>
    </div>
  )
}

export default App