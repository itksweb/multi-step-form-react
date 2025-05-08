import { useEffect } from "react";


const Plancard = ({ item, isMonthly, setPlan, plan }) => {
  const amount = isMonthly ? item[1] : item[1] * 10;
  const term = isMonthly ? "mo" : "yr";

  useEffect(()=>{
    if (plan.name && plan.name === item[0]) {
      setPlan((prev) => {
        return { ...prev, amount: isMonthly ? item[1] : item[1] * 10 };
      });
    }
  },[isMonthly])

  return (
    <div
      id={item[0]}
      className={`flex col-span-1 sm:min-w-[100px] max-sm:mb-2 items-start hover:border-[var(--Blue-300)] cursor-pointer sm:flex-col sm:justify-between border rounded-lg sm:rounded-2xl ${
        plan.name === item[0]
          ? "border-[var(--Purple-600)] border-2 bg-amber-300"
          : "border-[var(--Blue-200)] border"
      })] sm:p-4 p-2.5`}
      onClick={(e) => setPlan({ name: item[0], amount })}
    >
      <img
        src={item[2]}
        alt={`${item[0]} plan`}
        className="size-9 sm:size-11"
      />
      <div className="txt ml-3 sm:mt-11 sm:ml-0 ">
        <p className="name text-[var(--Blue-950)] font-medium">{item[0]}</p>
        <p className="amount text-[0.8em] text-[var(--Grey-500)] ">{`$${amount}/${term}`}</p>
        {!isMonthly && (
          <p className="yearly-extra text-[var(--Blue-950)] font-light text-[0.6em]">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default Plancard;
