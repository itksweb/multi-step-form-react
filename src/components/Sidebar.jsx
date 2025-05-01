import bgSidebar from "../images/bg-sidebar-desktop.svg";
import mobiBgSidebar from "../images/bg-sidebar-mobile.svg";

const sideData = ["Your info", "Select plan", "Add-ons", "Summary"];

const Step = ({ item, step }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-1 sm:mb-2.5 ">
      <div
        className={`col-span-1 p-2 rounded-full ${
          step === item[1] ? "bg-[purple] text-white" : "bg-[pink]"
        } flex justify-center items-center size-6`}
      >
        {item[1]}
      </div>
      <div className="hidden sm:block sm:col-span-4">
        <div className="">Step {item[1]}</div>
        <div className="text-[0.9em] font-medium">{item[0]}</div>
      </div>
    </div>
  );
};

const Sidebar = ({ step }) => {
  return (
    <div
      className={` w-full min-h-full text-[var(--White)] bg-no-repeat bg-cover p-4 bg-[url(/assets/images/bg-sidebar-mobile.svg)] sm:w-1/3 sm:bg-[url(/assets/images/bg-sidebar-desktop.svg)]`}
    >
      <div className="grid grid-cols-4 sm:block">
        {sideData.map((item, i) => (
          <Step key={item} item={[item.toUpperCase(), i + 1]} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
