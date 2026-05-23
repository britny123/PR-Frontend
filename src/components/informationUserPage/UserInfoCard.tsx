import { useState } from "react";

import InputField from "../reusableComponents/InputField";
import FormRow from "../reusableComponents/FormRow";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";

export default function UserInfoCard() {

  //  Por mientras, luego se conecta con la base de datos y backend para guardar los datos
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [blood, setBlood] = useState("");
  const [gender, setGender] = useState("");

  const handleSave = () => {
    // Aquí se implementaría la lógica para guardar los datos, por ejemplo, enviándolos a un servidor o almacenándolos localmente,
    //  para despues usarlos en otro componente como el ProfileCard, por ahora solo se muestra en consola
    console.log("Saved user info:", { name, identification, age, height, weight, blood, gender });
    //despues de guardar, se podrían limpiar los campos
  };

  return (
    <div className="w-87.5 bg-white rounded-4xl border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
      <h2 className="text-blue text-xl font-bold text-center title">
        Add more information
      </h2>

      <InputField
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <InputField
        placeholder="Identification"
        type="text"
        value={identification}
        onChange={(e) => setIdentification(e.target.value)}
      />

      <InputField
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <FormRow>
        <div className="flex-1">
          <InputField placeholder="Height" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />

        </div>

        <div className="flex-1">
          <InputField placeholder="Weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
      </FormRow>

      <InputField placeholder="Blood" type="text" value={blood} onChange={(e) => setBlood(e.target.value)} />

      <InputField placeholder="Gender" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />

      <ButtonLarge onClick={handleSave} text="Save" />
      <ButtonSmall onClick={() => {}} text="Exit" />
    </div>
  );
}