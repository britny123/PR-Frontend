import Sidebar from "../homePage/Sidebar";
import { MedicineCalendar } from "../homePage/Calendar";
import MedicineSection from "./MedicineSection";
import { medicines } from "./medecineData";
import Header from "../homePage/HeaderBar";
import "react-day-picker/dist/style.css";
import UserInfoPanel from "../homePage/UserInfoPanel";
import { useState } from "react";
import { useUserData } from "../../context/UserDataContext";

export default function Home() {
    const [showUserPanel, setShowUserPanel] = useState(false);
     const { userData } = useUserData();
  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 ml-28">
        <div className="shrink-0 px-6 pt-6 pb-4">
          <Header
            userName={userData.name}
            date={new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            onProfileClick={() => setShowUserPanel(!showUserPanel)}
          />
        </div>

        <div className="flex-1 px-6 pb-6 min-h-0">
          <div className="w-full h-full bg-gray-100 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
            <div className="p-6 mt-6 ">
              <MedicineSection medicines={medicines} />
              <div className="mt-7 pl-18">
                <MedicineCalendar medicineDays={[]} />
              </div>
            </div>
          </div>

          {/* Panel de Usuario - Aparece al hacer click */}
          {showUserPanel && (
            <div className="fixed right-0 top-24 bottom-0 w-80 bg-white shadow-lg z-40 overflow-y-auto p-3 border border-gray-300">
              <UserInfoPanel />
            </div>
          )}

          {/* Overlay para cerrar el panel */}
          {showUserPanel && (
            <div
              className="fixed inset-0 z-30"
              onClick={() => setShowUserPanel(false)}
            />
          )}




        </div>
      </div>
    </div>
  );
}