import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [plan, setPlan] = useState({ name: "", amount: 0 });
  const [isMonthly, setIsMonthly] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [step, setStep] = useState(1);
  const [addons, setAddons] = useState([]);
  const [inputErr, setInputErr] = useState({
    name: false,
    phone: false,
    email: false,
    plan: false,
  });

  const changePlan = () => setStep(2);

  const nextStep = () => {
    if (step === 1) {
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
      }
      if (!userInfo.phone) {
        return setInputErr((prev) => {
          return { ...prev, phone: true };
        });
      }
    }
    if (step === 2) {
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
    if (step === 4) {
      if (userInfo.name && userInfo.phone && userInfo.email && plan.name) {
        return setConfirmed(true);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col lg:w-[960px] md:w-[690px] sm:w-[580px] text-gray-700 sm:flex-row sm:bg-[var(--White)] sm:p-4 sm:h-[90vh] sm:rounded-xl sm:justify-between  ">
      <Sidebar step={step} />
      <main className="relative px-4 rounded-2xl h-full sm:pt-4 sm:w-2/3 ">
        {!confirmed && (
          <div className="max-sm:-mt-18 bg-white max-sm:p-4 rounded-xl flex justify-center items-center py-4 w-full">
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
        )}
        {/* control buttons  */}
        {!confirmed && (
          <div className="sm:absolute sm:bottom-0 sm:left-0 sm:right-0  max-sm:fixed max-sm:left-0 max-sm:right-0 max-sm:bottom-0  max-sm:bg-[var(--White)] sm:mt-10">
            <div
              className={` py-3 px-4 flex w-[95%] sm:w-[85%] mx-auto sm:px-4 ${
                step === 1 ? "justify-end" : "justify-between"
              }`}
            >
              {step > 1 && (
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
                } px-5 py-2.5 text-[var(--White)] cursor-pointer rounded-[2px] sm:rounded-lg text-[0.8em] sm:text-[1em] `}
                onClick={nextStep}
                type="button"
              >
                {step === 4 ? "Confirm" : "Next Step"}
              </button>
            </div>
          </div>
        )}
        {confirmed && <ThankYou />}
      </main>
    </div>
  );
};

export default App;
