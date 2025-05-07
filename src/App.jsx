import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [plan, setPlan] = useState({ name: "", amount: 0 });
  const [addons, setAddons] = useState([]);
  const [inputErr, setInputErr] = useState({ name: false, phone: false, email: false, plan:false });
  const [isMonthly, setIsMonthly] = useState(false);
  const [step, setStep] = useState(1);

  const changePlan = () => setStep(2);

  const nextStep = () => {
    if (step === 1 ) {
      if (userInfo.name && userInfo.phone && userInfo.email) {
        return setStep((prev) => prev + 1);
      }
      if (!userInfo.name) {
        return setInputErr((prev) => {
          return { ...prev, name: true };
        });
      }
      if (!userInfo.email || !emailRegex.test(userInfo.email)) {
        return setInputErr((prev) => {
          return { ...prev, email: true };
        });
      } if (!userInfo.phone) {
        return setInputErr((prev) => {
          return { ...prev, phone: true };
        });
      }
      
    }
    if (step === 2 ) {
      if (plan.name) {
        return setStep((prev) => prev + 1);
      }
      return setInputErr((prev) => {
        return { ...prev, plan: true };
      });
    }
    if (step === 3) {
      return setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-[100vh] max-sm:max-h-[100vh] sm:flex-row text-gray-700 sm:bg-[var(--White)] sm:py-5 sm:px-8 sm:min-h-[80vh] sm:rounded-xl ">
      <Sidebar step={step} />
      <main className="px-4 rounded-2xl h-full md:min-w-[540px] min-h-[75vh] sm:p-4 flex flex-col justify-between">
        <div className=" -mt-18 sm:mt-0 bg-white rounded-xl px-7 py-4 w-full">
          {step === 1 && (
            <PersonalInfo
              setUserInfo={setUserInfo}
              nextStep={nextStep}
              userInfo={userInfo}
              inputErr={inputErr}
              setInputErr={setInputErr}
            />
          )}
          {step === 2 && (
            <Plan
              setPlan={setPlan}
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
              plan={plan}
              err={inputErr.plan}
              setInputErr={setInputErr}
            />
          )}
          {step === 3 && (
            <AddOns
              setAddons={setAddons}
              addons={addons}
              isMonthly={isMonthly}
            />
          )}
          {step === 4 && (
            <Summary
              isMonthly={isMonthly}
              plan={plan}
              addons={addons}
              changePlan={changePlan}
            />
          )}
        </div>
        {/* control buttons  */}
        <div
          className={` p-4 bg-[var(--White)]  flex -mx-4 sm:-mx-0 sm:px-8 ${
            step === 1 ? "justify-end" : "justify-between"
          }`}
        >
          {step !== 1 && (
            <button
              className="btn text-[0.8em] hover:text-[var(--Blue-950)] focus:text-[var(--Blue-950)] cursor-pointer sm:text-[1em] text-[var(--Grey-500)]"
              onClick={prevStep}
              type="button"
            >
              Go Back
            </button>
          )}
          <button
            className={`${
              step === 4 ? "bg-[var(--Purple-600)]" : "bg-[var(--Blue-950)]"
            } px-5 py-2 text-[var(--White)] cursor-pointer rounded-lg text-[0.8em] sm:text-[1em] `}
            onClick={nextStep}
            type={step === 1 ? "submit" : "button"}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
