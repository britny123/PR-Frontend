import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import { getProfile, updateEmergencyContact } from "../../services/profileService";

export default function EmergencyEdit() {
  const navigate = useNavigate();

  const [profileId, setProfileId] = useState("");

 const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPerson, setEmergencyPerson] = useState("");
  const [relationship, setRelationship] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await getProfile();

      setProfileId(profile.id);
      setEmergencyContact(profile.emergency_contact || "");
      setEmergencyPerson(profile.emergency_person || "");
      setRelationship(profile.relationship || "");
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    try {
      await updateEmergencyContact(profileId, {
        emergency_contact: emergencyContact,
        emergency_person: emergencyPerson,
        relationship: relationship,
      });

      navigate("/home");

    } catch (error) {
      console.error(error);
      alert("Error updating emergency contact");
    }
  };

  return (
     <div className="w-87.5 bg-white rounded-[30px] border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        Emergency Contact
      </h2>

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

      <ButtonLarge onClick={handleSave} text="Save Changes" />
      <ButtonSmall onClick={() => navigate("/home")} text="Exit" />
    </div>
  );
}