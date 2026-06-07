import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";

export default function UserInfoCard() {

  //  Por mientras, luego se conecta con la base de datos y backend para guardar los datos
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPerson, setEmergencyPerson] = useState("");
  const [relationship, setRelationship] = useState("");
  const [allergies, setAllergies] = useState("");
  const [conditions, setConditions] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // Aquí se implementaría la lógica para guardar los datos, por ejemplo, enviándolos a un servidor o almacenándolos localmente,
    //  para despues usarlos en otro componente como el ProfileCard, por ahora solo se muestra en consola
    console.log("Saved user info:", { phone, emergencyContact, emergencyPerson, relationship, allergies, conditions});
    //despues de guardar, se podrían limpiar los campos
    navigate("/login"); //despues de guardar, se redirigire a la segunda parte del formulario
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

      <InputField placeholder="Relationship with person"
        type="text"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
        />

       <InputField
        placeholder="Allergies"
        type="text"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)} />
        

      <InputField
       placeholder="Conditions" 
       type="text" 
       value={conditions} 
       onChange={(e) => setConditions(e.target.value)} />

      <ButtonLarge onClick={handleSave} text="Save" />
      <ButtonSmall onClick={() => {navigate("/information-user1")}} text="Exit" />
    </div>
  );
}