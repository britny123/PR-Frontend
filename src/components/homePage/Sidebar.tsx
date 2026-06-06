import { Settings } from "lucide-react";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 h-screen w-28 bg-white flex flex-col items-center py-6 z-50">
      <img src={logo2} alt="Pill Reminder" className="w-16 h-auto mb-auto" />
      <button
        className=""
        onClick={() => navigate("/accessibility")}
      >
        <Settings size={24} color="#2469A0" />
      </button>
    </div>
  );
}

export default Sidebar;