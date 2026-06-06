import { useState } from "react";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import { useNavigate } from "react-router-dom";

export default function LoginInformationCard() {
  const navigate = useNavigate();
  //  Por mientras, luego se conecta con la base de datos y backend para guardar los datos
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSave = () => {
    console.log("Saved login info:", {
        user,
        password,
    });
    navigate('/home'); //despues de guardar, se redirigire a la pagina principal
};

return (
    <div className="w-87.5 bg-white rounded-4xl border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
        <h2 className="text-blue text-xl font-bold text-center title">
            Login
        </h2>

        <InputField
            placeholder="User"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
        />

        <InputField
            placeholder="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonLarge onClick={handleSave} text="Save" />
    </div>
    );
}
