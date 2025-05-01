import ContentHead from "./ContentHead";
import Plancard from "./Plancard";

const plans = [
  ["Arcade", 9, "/assets/images/icon-arcade.svg"],
  ["Advanced", 12, "/assets/images/icon-advanced.svg"],
  ["pro", 15, "/assets/images/icon-pro.svg"],
];

const Plan = ({ isMonthly, setIsMonthly }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <ContentHead
        title="Select your plan"
        descr="You have the option of monthly or yearly billing."
      />
      <div className="plans grid grid-flow-col grid-cols-3 gap-5">
        {plans.map((item) => (
          <Plancard key={item[0]} item={item} isMonthly={isMonthly} />
        ))}
      </div>
      <div className="month-switch flex justify-center items-center p-3 my-3 bg-[var(--Blue-50)]">
        <div
          className={` w-10 cursor-pointer bg-[var(--Blue-950)] rounded-full h-5 flex items-center p-[2px] ${
            !isMonthly ? "justify-end" : "justify-start"
          } `}
          onClick={() => setIsMonthly(!isMonthly)}
        >
          <div className="switch-inner bg-white size-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
