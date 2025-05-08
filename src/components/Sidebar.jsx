const sideData = ["Your info", "Select plan", "Add-ons", "Summary"];

const Step = ({ item, step }) => {
  return (
    <div className="mx-1 flex sm:mb-4 sm:justify-items-start sm:items-start sm:mx-0 ">
      <div
        className={`text-[0.8em] font-medium col-span-1 p-2 rounded-full sm:mr-2.5 ${
          step === item[1]
            ? "bg-[var(--Blue-200)] text-[var(--Blue-950)]"
            : "border-[1px] border-white"
        } flex justify-center items-center size-7`}
      >
        {item[1]}
      </div>
      <div className="hidden  sm:inline-block ">
        <p className="text-[var(--Grey-500)] text-[0.7em]">STEP {item[1]}</p>
        <p className="text-[0.9em] font-medium">{item[0]}</p>
      </div>
    </div>
  );
};

const Sidebar = ({ step }) => {
  return (
    <div
      className={` flex max-sm:justify-center sm:justify-items-start sm:items-start max-sm:min-h-[25vh] p-4 bg-[url(/assets/images/bg-sidebar-mobile.svg)] w-full  text-[var(--White)] bg-cover bg-no-repeat sm:min-h-full sm:w-1/3 sm:bg-[url(/assets/images/bg-sidebar-desktop.svg)] sm:py-12 `}
    >
      <div className=" max-sm:flex max-sm:justify-items-start py-3  sm:block">
        {sideData.map((item, i) => (
          <Step key={item} item={[item.toUpperCase(), i + 1]} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
