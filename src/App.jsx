import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

const App = () => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [plan, setPlan] = useState({ name: "", cost: "" });
  const [addons, setAddons] = useState([]);
  const [isMonthly, setIsMonthly] = useState(false);
  const [step, setStep] = useState(2);

  const changePlan = () => {};

  // useEffect(() => console.log(userInfo), [userInfo]);

  const nextStep = (e) => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex p-0 flex-col sm:flex-row text-gray-700 sm:bg-white sm:p-4 sm:gap-8  sm:min-h-[80vh] sm:rounded-xl ">
      <Sidebar step={step} />
      <main className=" rounded-2xl p-4 flex flex-col justify-between">
        <div className={`${step === 1 ? "h-full" : ""}`}>
          {step === 1 && (
            <PersonalInfo
              setUserInfo={setUserInfo}
              nextStep={nextStep}
              userInfo={userInfo}
            />
          )}
          {step === 2 && (
            <Plan
              setPlan={setPlan}
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
            />
          )}
          {step === 3 && <AddOns setAddons={setAddons} isMonthly={isMonthly} />}
          {step === 4 && (
            <Summary isMonthly={isMonthly} changePlan={changePlan} />
          )}
        </div>
        {step !== 1 && (
          <div
            className={`btns flex ${
              step === 1 ? "justify-end" : "justify-between"
            }`}
          >
            {step !== 1 && (
              <button className="btn" onClick={prevStep} type="button">
                Go Back
              </button>
            )}
            <button
              className="btn"
              onClick={step !== 1 ? nextStep : () => {}}
              type={step === 1 ? "submit" : "button"}
            >
              {step === 4 ? "Confirm" : "Next Step"}t
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
