import { useEffect, useState } from "react";
import ContentHead from "./ContentHead";
import StepContainer from "./StepContainer";

const Summary = ({ isMonthly, addons, plan, changePlan }) => {
  const [total, setTotal] = useState(0);
  const term = isMonthly ? "mo" : "yr";
  const hasObject = addons.some((obj) => obj.name);

  
    

  useEffect(() => {
    if (plan.amount) {
      setTotal(plan.amount);
      if (addons.some((obj) => obj.name)) {
        for (const x of addons) {
          setTotal((prev) => prev + x.amount);
        }
      }
    } else setTotal(0);
  }, [addons, plan]);

  return (
    <StepContainer
      title="Finishing up"
      descr="Double-check everything looks OK before confirming."
    >
      {/* <ContentHead
        title="Finishing up"
        descr="Double-check everything looks OK before confirming."
      /> */}
      <div className="p-4 bg-gray-100 rounded-lg ">
        <div className="plan flex items-center justify-between mb-2">
          <div className="plan-left">
            <span className="plan-name block text-[var(--Blue-950)] text= font-semibold">
              {`${plan.name ? plan.name : "No plan selected"}(${
                isMonthly ? "Monthly" : "Yearly"
              })`}
            </span>
            <button
              type="button change-plan block"
              onClick={() => changePlan()}
            >
              <span className="change-plan text-sm cursor-pointer hover:underline ">
                change
              </span>
            </button>
          </div>
          <div className="plan-right text-[var(--Blue-950)] text= font-semibold">
            ${plan.name ? plan.amount : "0.00"}/{term}
          </div>
        </div>
        <hr className="my-3" />
        {hasObject ? (
          <div className="summary-addons mt-3 ">
            {addons.map((item) => (
              <div
                className="flex items-center justify-between mb-2"
                key={item.name}
              >
                <div className="addon-name text-[0.9em] text-[var(--Grey-500)]">
                  {item.name}
                </div>
                <div className="addon-amount text-[0.9em] text-[var(--Blue-950)]">
                  +${item.amount}/{term}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="summary-addons my-2 text-center text-[0.9em] text-[var(--Grey-500)] ">
            no add-ons
          </div>
        )}
      </div>
      <div className="flex p-4 items-center justify-between mb-2">
        <span className="total-label text-[0.9em] text-[var(--Grey-500)]">
          Total (per {isMonthly ? "month" : "year"})
        </span>
        <span className="total-amount font-bold text-[var(--Purple-600)]">
          +${total}/{term}
        </span>
      </div>
    </StepContainer>
  );
};

export default Summary;
