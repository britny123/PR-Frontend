import Sidebar from "../homePage/Sidebar";
import { MedicineCalendar } from "../homePage/Calendar";
import MedicineSection from "./MedicineSection";
import { medicines } from "./medecineData";
import Header from "../homePage/HeaderBar";
import "react-day-picker/dist/style.css";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 ml-28">
        <div className="shrink-0 px-6 pt-6 pb-4">
          <Header
            userName="Brittany"
            date="September 15, 2024"
            onProfileClick={() => alert("Profile clicked")}
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
        </div>
      </div>
    </div>
  );
}