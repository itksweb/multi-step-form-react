const sideData = ["Your info", "Select plan", "Add-ons", "Summary"];

const Step = ({ item, step }) => {
  return (
    <div className="mx-2 flex sm:mb-4 sm:justify-center sm:items-start sm:mx-0 ">
      <div
        className={`text-[0.8em] font-medium col-span-1 p-2 rounded-full sm:mr-2.5 ${
          step === item[1]
            ? "bg-[var(--Blue-200)] text-[var(--Blue-950)]"
            : "border-[1px] border-white"
        } flex justify-center items-center size-7`}
      >
        {item[1]}
      </div>
      <div className="hidden  sm:block ">
        <div className="text-[var(--Grey-500)] text-[0.7em]">
          STEP {item[1]}
        </div>
        <div className="text-[0.9em] font-medium">{item[0]}</div>
      </div>
    </div>
  );
};

const Sidebar = ({ step }) => {
  return (
    <div
      className={` flex justify-evenly items-center min-h-[25vh] p-7 bg-[url(/assets/images/bg-sidebar-mobile.svg)] w-full  text-[var(--White)] bg-cover bg-center bg-no-repeat sm:bg-left sm:min-h-full sm:bg-cover sm:p-4  sm:w-1/3 sm:bg-[url(/assets/images/bg-sidebar-desktop.svg)] sm:py-12 `}
    >
      <div className="flex justify-evenly items-center sm:flex-col">
        {sideData.map((item, i) => (
          <Step key={item} item={[item.toUpperCase(), i + 1]} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
