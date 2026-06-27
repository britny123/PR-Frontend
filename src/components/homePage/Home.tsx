import Sidebar from "../homePage/Sidebar";
import { MedicineCalendar } from "../homePage/Calendar";
import MedicineSection from "./MedicineSection";
import { getMedicines, transformMedicinesForNotification } from "../../services/medicineService";
import Header from "../homePage/HeaderBar";
import "react-day-picker/dist/style.css";
import UserInfoPanel from "../homePage/UserInfoPanel";
import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";
import NotificationManager from "../homePage/NotificationManager";
import { speak } from "../accesibilityPage/textToSpeech";
import { getAccessibilitySettings } from "../../services/accessibilityService";

export default function Home() {
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [medicines, setMedicines] = useState<any[]>([]);
  const [notificationMedicines, setNotificationMedicines] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const loadProfile = async () => {
      try {

        const data = await getProfile();

        setProfile(data);

      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();

  }, []);

  useEffect(() => {
    const loadMedicines = async () => {
      try {
        const data = await getMedicines();
        setMedicines(data);
        const transformedMedicines = transformMedicinesForNotification(data);
        setNotificationMedicines(transformedMedicines);
      } catch (error) {
        console.error("Error loading medicines:", error);
      }
    };

    loadMedicines();
  }, []);

  useEffect(() => {
    const initializeAccessibility = async () => {
      const settings = await getAccessibilitySettings();

      if (settings.textToSpeech) {
        await speak(
          "Welcome to the home page. Move the mouse over any section to hear information."
        );
      }
    };

    initializeAccessibility();
  }, []);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  const medicineDays: Date[] = [];

medicines.forEach((medicine) => {
  const start = new Date(medicine.startDate + "T00:00:00");
  const end = new Date(medicine.endDate + "T00:00:00");

  for (
    let day = new Date(start);
    day <= end;
    day.setDate(day.getDate() + 1)
  ) {
    medicineDays.push(new Date(day));
  }
});

  return (

<>
<NotificationManager medicines={notificationMedicines} />
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 pt-40 md:ml-28 md:pt-0">
        <div className="shrink-0 px-4 pb-4 md:px-6 md:pt-6">
          <Header
            userName={profile?.name || "User"} 
            date={new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            onProfileClick={() => setShowUserPanel(!showUserPanel)}
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="flex-1 px-3 pb-4 min-h-0 md:px-6 md:pb-6">
          <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden md:rounded-tl-3xl md:rounded-bl-3xl">
            <div className="p-4 md:p-6 md:mt-6">
              <div onMouseEnter={() => void speak("Medicine list")}>
                <MedicineSection medicines={filteredMedicines} />
                  </div>
              <div className="mt-7 md:pl-18" onMouseEnter={() => void speak("Medication calendar")}>
                <MedicineCalendar medicineDays={medicineDays} />
                  </div>
            </div>
          </div>

          {/* Panel de Usuario - Aparece al hacer click */}
          {showUserPanel && (
            <div className="fixed right-0 top-16 bottom-0 w-full max-w-80 bg-white shadow-lg z-50 overflow-y-auto p-3 border border-gray-300 md:top-24">
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
    </>
  );
}
