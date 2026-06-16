import { Settings } from "lucide-react";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 h-16 w-full bg-white flex items-center justify-between px-4 z-50 border-b border-gray-100 md:h-screen md:w-28 md:flex-col md:justify-start md:py-6 md:border-b-0">
      <img src={logo2} alt="Pill Reminder" className="w-12 h-auto md:w-16 md:mb-auto" />

      <button
        className="flex items-center justify-center w-10 h-10"
        onClick={() => navigate("/accessibility")}
      >
        <Settings size={24} color="#2469A0" />
      </button>
    </div>
  );
}

export default Sidebar;
