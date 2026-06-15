import { useState } from "react";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService"; 


export default function LoginInformationCard() {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSave = async () => {
     try {
        const data = await login(
            username,
            password
        );

        localStorage.setItem("token", data.token);

        navigate("/home"); 

    } catch (error) {
        console.error(error);
    }
};

return (
    <div className="w-87.5 bg-white rounded-4xl border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
        <h2 className="text-blue text-xl font-bold text-center title">
            Login
        </h2>

        <InputField
            placeholder="User"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />

        <InputField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonLarge onClick={handleSave} text="Save" />
    </div>
    );
}
