import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import InputField from "../reusableComponents/InputField";
import FormRow from "../reusableComponents/FormRow";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import MedicineIcon from "./MedicineIcon";
import { createMedicine, getMedicineById, updateMedicine } from "../../services/medicineService";

export default function MedicineCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const medicineToEdit = location.state?.medicine;
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

  useEffect(() => {
  const loadMedicine = async () => {
    if (!id) return;

    const data = medicineToEdit || await getMedicineById(id);

    setName(data.name);
    setDailyDose(data.dailyDose);
    setTimeTake(data.timeTake);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
    setExpirationDate(data.expirationDate);
    setSelectedIcon(data.icon);
  };

  loadMedicine();
}, [id, medicineToEdit]);

const handleSave = async () => {
  const medicineData = {
    name,
    dailyDose,
    timeTake,
    startDate,
    endDate,
    expirationDate: ExpirationDate,
    icon: selectedIcon,
  };

  try {
    if (isEditing && id) {
      await updateMedicine(id, medicineData);
    } else {
      await createMedicine(medicineData);
    }

    navigate("/home");
  } catch (error) {
    console.error("Error saving medicine:", error);
  }
};

  return (
    <div className="w-87.5 bg-white rounded-[30px] border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        {isEditing ? "Edit medicine" : "Add a new medicine"}
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
        type="time"
        value={timeTake}
        onChange={(e) => setTimeTake(e.target.value)}
      />

      <FormRow>
        <div className="w-1/2 min-w-0">
          <InputField placeholder="StartDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

       <div className="w-1/2 min-w-0">
          <InputField placeholder="EndDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </FormRow>

      <InputField placeholder="Expiration Date" type="date" value={ExpirationDate} onChange={(e) => setExpirationDate(e.target.value)} />

      <MedicineIcon 
        icons={icons} 
        selectedIcon={selectedIcon} 
        setSelectedIcon={setSelectedIcon} 
      />

      <ButtonLarge onClick={handleSave} text={isEditing ? "Update" : "Save"} />
      <ButtonSmall onClick={() => navigate('/home')} text="Exit" />
    </div>
  );
}
