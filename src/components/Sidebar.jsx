import bgSidebar from "../images/bg-sidebar-desktop.svg"
import mobiBgSidebar from "../images/bg-sidebar-mobile.svg"

const Sidebar = () => {
  return (
    <div className={`col-span-1 min-w-80 h-full bg-no-repeat bg-contain p-4 bg-[url(${bgSidebar})]`}>Sidebar</div>
  )
}

export default Sidebar