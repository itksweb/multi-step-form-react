import ContentHead from "./ContentHead";

const Summary = ({ isMonthly, addons, plan, changePlan }) => {
  const term = isMonthly ? "mo" : "yr";
  const Addn = ({ item }) => {
    
    return (
      <div className="flex items-center justify-between">
        <div className="addon-name">{item.name}</div>
        <div className="addon-amount">
          +${item.amount}/{term}
        </div>
      </div>
    );
  };

  return (
    <div className=" ">
      <ContentHead
        title="Finishing up"
        descr="Double-check everything looks OK before confirming."
      />
      {plan.name && (
        <div className="flex items-center justify-between">
          <div className="plan">
            <span className="plan-name block text-[var(--Blue-950)] text= font-semibold">
              {`${plan.name}(${isMonthly ? "Monthly" : "Yearly"})`}
            </span>
            <span className="change-plan block">change plan</span>
          </div>
          <div className="plan-amount text-[var(--Blue-950)] text= font-semibold">
            ${plan.amount}/{term}
          </div>
        </div>
      )}
      {addons[0].name && (
        <div className="summary-addons ">
          {addons.map((item) => (
            <div className="flex items-center justify-between" key={item.name}>
              <div className="addon-name">{item.name}</div>
              <div className="addon-amount">
                +${item.amount}/{term}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
