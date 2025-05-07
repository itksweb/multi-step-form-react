import { useEffect } from "react";

const AddOnCard = ({ setAddons, isMonthly, addons, item }) => {
  const hasObject = addons.some((obje) => obje.name === item[0]);
  const amount = isMonthly ? item[1] : item[1] * 10;
  const term = isMonthly ? "mo" : "yr";

  useEffect(() => {
    if (hasObject) {
       setAddons((prev) =>
         prev.map((objt) =>
           objt.name === item[0]
             ? { ...objt, amount: isMonthly ? item[1] : item[1] * 10 }
             : objt
         )
       );
    }
  }, [isMonthly]);

  const handleClick = () => {
    setAddons((prev) => {
      const newObj = {
        name: item[0],
        amount: isMonthly ? item[1] : item[1] * 10,
      };

      return hasObject
        ? prev.filter((obj) => obj.name !== item[0])
        : [...prev, newObj];
    });
  };
  return (
    <div
      id={item[0]}
      className={`flex justify-between items-center border my-3 cursor-pointer rounded-lg ${
        hasObject
          ? "border-[var(--Purple-600)]  bg-[] "
          : "border-[var(--Blue-200)] border"
      })] sm:p-4 p-2.5`}
      onClick={handleClick}
    >
      <div className=" flex items-center ">
        <input
          type="checkbox"
          name={item[0]}
          id={item[0]}
          className="size-5 "
          checked={hasObject}
          onChange={()=>{}}
        />
        <div className="ml-3">
          <p className="name text-[var(--Blue-950)] font-medium">{item[0]}</p>
          <p className="amount text-[0.8em] text-[var(--Grey-500)] ">
            {item[2]}
          </p>
        </div>
      </div>
      <p className="yearly-extra text-[var(--Blue-950)] font-light text-[0.6em]">
        +${amount}/${term}
      </p>
    </div>
  );
};

export default AddOnCard;
