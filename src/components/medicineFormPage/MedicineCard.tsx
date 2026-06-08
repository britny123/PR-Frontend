import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputField from "../reusableComponents/InputField";
import FormRow from "../reusableComponents/FormRow";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import MedicineIcon from "./MedicineIcon";

export default function MedicineCard() {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [dailyDose, setDailyDose] = useState("");
  const [timeTake, setTimeTake] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ExpirationDate, setExpirationDate] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const icons = [
    { name: "Jarabe", src: "/jarabe.webp" },
    { name: "Cápsula", src: "/capsula.webp" },
    { name: "Tableta", src: "/tableta.webp" }
    
  ];

  const handleSave = () => {
    console.log("Saved medicine info:", { name, dailyDose, timeTake, startDate, endDate, ExpirationDate, selectedIcon });
    navigate('/home');
  };

  return (
    <div className="w-87.5 bg-white rounded-[30px] border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        Add a new medicine
      </h2>

      <InputField
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputField
        placeholder="Daily Dose"
        type="text"
        value={dailyDose}
        onChange={(e) => setDailyDose(e.target.value)}
      />

      <InputField
        placeholder="Time of Take"
        type="text"
        value={timeTake}
        onChange={(e) => setTimeTake(e.target.value)}
      />

      <FormRow>
        <div className="flex-1">
          <InputField placeholder="StartDate" type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <div className="flex-1">
          <InputField placeholder="EndDate" type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </FormRow>

      <InputField placeholder="Expiration Date" type="text" value={ExpirationDate} onChange={(e) => setExpirationDate(e.target.value)} />

      <MedicineIcon 
        icons={icons} 
        selectedIcon={selectedIcon} 
        setSelectedIcon={setSelectedIcon} 
      />

      <ButtonLarge onClick={handleSave} text="Save" />
      <ButtonSmall onClick={() => navigate('/home')} text="Exit" />
    </div>
  );
}