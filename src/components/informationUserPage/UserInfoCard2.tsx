import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import { useUserData } from "../../context/UserDataContext";

export default function UserInfoCard2() {
  const navigate = useNavigate();
  const { setUserData } = useUserData();

  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPerson, setEmergencyPerson] = useState("");
  const [relationship, setRelationship] = useState("");
  const [allergies, setAllergies] = useState("");
  const [conditions, setConditions] = useState("");

  const handleSave = () => {
    setUserData((prev) => ({
      ...prev,
      phone,
      emergencyContact,
      emergencyPerson,
      relationship,
      allergies: allergies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      conditions,
    }));

    navigate("/home");
  };

  return (
    <div className="w-87.5 bg-white rounded-[30px] border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        Contact and diseases
      </h2>

      <InputField
        placeholder="Phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <InputField
        placeholder="Emergency Contact"
        type="text"
        value={emergencyContact}
        onChange={(e) => setEmergencyContact(e.target.value)}
      />

      <InputField
        placeholder="Emergency Person"
        type="text"
        value={emergencyPerson}
        onChange={(e) => setEmergencyPerson(e.target.value)}
      />

      <InputField
        placeholder="Relationship with person"
        type="text"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      />

      <InputField
        placeholder="Allergies"
        type="text"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />

      <InputField
        placeholder="Conditions"
        type="text"
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
      />

      <ButtonLarge onClick={handleSave} text="Save" />
      <ButtonSmall onClick={() => navigate("/information-user1")} text="Exit" />
    </div>
  );
}