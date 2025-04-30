// import arcade from ""

const Plancard = ({ item, isMonthly, setPlan }) => {
  const amount = isMonthly ? item[1] : item[1] * 10;
  const term = isMonthly ? "mo" : "yr";
  return (
    <div className="flex flex-col justify-between border rounded-2xl border-[var(--Blue-200)] p-5">
      <img src={item[2]} alt={`${item[0]} plan`} className="size-11" />
      <div className="txt mt-14 ">
        <p className="name text-[var(--Blue-950)] font-medium">{item[0]}</p>
        <p className="amount">{`$${amount}/${term}`}</p>
        {!isMonthly && (
          <p className="yearly-extra text-[var(--Blue-950)] font-light">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default Plancard;
