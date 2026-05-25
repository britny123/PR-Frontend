import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import SmallButton from "../reusableComponents/SmallButton";

export default function RegisterInfoCard() {
  //  Por mientras, luego se conecta con la base de datos y backend para guardar los datos
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSave = () => {
    console.log("Saved Register info:", {
        email,
        user,
        password,
    });
    navigate('/login');
};

return (
    <div className="w-87.5 bg-white rounded-4xl border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
        <h2 className="text-blue text-xl font-bold text-center title">
            Register
        </h2>

        <InputField
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

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
        <SmallButton onClick={() => navigate('/login')} text = "Login" />
    </div>
    );
}
