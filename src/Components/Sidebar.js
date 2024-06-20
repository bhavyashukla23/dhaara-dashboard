import { RiDashboardFill } from "react-icons/ri";
import '../Css/SideBar.css';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="Menu-item"> 
            <RiDashboardFill />
            <p className="item-1">DashBoard</p>
            </div>
        </div>
    );
};

export default SideBar;