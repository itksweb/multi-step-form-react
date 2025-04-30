import ContentHead from "./ContentHead";
import Plancard from "./Plancard";

const plans = [
  ["Arcade", 9, "/assets/images/icon-arcade.svg"],
  ["Advanced", 12, "/assets/images/icon-advanced.svg"],
  ["pro", 15, "/assets/images/icon-pro.svg"],
];

const Plan = ({ isMonthly }) => {
  return (
    <div>
      <ContentHead
        title="Select your plan"
        descr="You have the option of monthly or yearly billing."
      />

      <div className="plans grid grid-flow-col grid-cols-3 gap-5">
        {plans.map((item) => (
          <Plancard key={item[0]} item={item} isMonthly={isMonthly} />
        ))}
      </div>
    </div>
  );
};

export default Plan;
