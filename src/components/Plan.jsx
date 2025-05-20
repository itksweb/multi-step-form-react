import { useEffect } from "react";
import ContentHead from "./ContentHead";
import Plancard from "./Plancard";
import StepContainer from "./StepContainer";

const plans = [
  ["Arcade", 9, "/assets/images/icon-arcade.svg"],
  ["Advanced", 12, "/assets/images/icon-advanced.svg"],
  ["Pro", 15, "/assets/images/icon-pro.svg"],
];

const Plan = ({ isMonthly, setIsMonthly, plan, setPlan, err, errTxt, setInputErr }) => {
  
  useEffect(()=>{
    if (plan.name) {
      setInputErr((prev) => {
        return { ...prev, plan: false };
      });
    }
  },[plan])
  return (
    <StepContainer
      title="Select your plan"
      descr="You have the option of monthly or yearly billing."
    >
      {/* <ContentHead
        title="Select your plan"
        descr="You have the option of monthly or yearly billing."
      /> */}
      <div className="plans sm:grid sm:grid-flow-col sm:grid-cols-3 sm:gap-7 w-full">
        {plans.map((item) => (
          <Plancard
            key={item[0]}
            item={item}
            isMonthly={isMonthly}
            setPlan={setPlan}
            plan={plan}
          />
        ))}
      </div>
      <div className="rounded-lg sm:rounded-xl month-switch flex justify-center items-center p-2.5 sm:p-3 my-5 sm:my-7 bg-[var(--Blue-50)] w-full">
        <div
          className={`text-[0.8em] font-semibold text-[var(--${
            isMonthly ? "Blue-950" : "Grey-500"
          })]`}
        >
          Monthly
        </div>
        <div
          className={` w-7 h-3.5 sm:w-10 cursor-pointer mx-6 bg-[var(--Blue-950)] rounded-full sm:h-5 flex items-center p-[2px] ${
            !isMonthly ? "justify-end" : "justify-start"
          } `}
          onClick={() => setIsMonthly(!isMonthly)}
        >
          <div className="switch-inner bg-white size-2.5 sm:size-4 rounded-full"></div>
        </div>
        <div
          className={`text-[0.8em] font-semibold text-[var(--${
            !isMonthly ? "Blue-950" : "Grey-500"
          })]`}
        >
          Yearly
        </div>
      </div>
      <p
        className={`${
          err ? "text-sm text-[var(--Red-500)] text-center " : "hidden"
        } `}
      >
        {`${errTxt ? errTxt : "Please select a plan to proceed"}`}
      </p>
    </StepContainer>
  );
};

export default Plan;
