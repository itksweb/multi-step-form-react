import bgSidebar from "../images/bg-sidebar-desktop.svg"
import mobiBgSidebar from "../images/bg-sidebar-mobile.svg"

const sideData = [
  "Your info", "Select plan", "Add-ons", "Summary"
]

const Step = ({item, step}) => {
  
  return (
    <div className="grid grid-cols-5">
      <div className={`col-span-1 p-2 rounded-full ${step === item[1] ? "bg-[purple]":"bg-[pink]"}`}>
        {item[1]}
      </div>
      <div className="col-span-4">
        <div className="">Step {item[1]}</div>
        <div className="text-3xl">{item[0]}</div>
      </div>
    </div>
  )
}

const Sidebar = ({step}) => {
  return (
    <div className={`col-span-1 min-w-80 h-full bg-no-repeat bg-contain p-4 bg-[url(${bgSidebar})]`}>
      <div>Step {step}</div>
      <div>
        {sideData.map((item, i) => <Step item ={[item, i+1]} step ={step} />)}
      </div>
    </div>
  )
}

export default Sidebar