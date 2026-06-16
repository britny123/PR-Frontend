import { useState } from "react";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService"; 

import { Eye, EyeOff } from "lucide-react";

export default function LoginInformationCard() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleSave = async () => {
        setErrorMessage("");
    try {
        const data = await login(
            username,
            password
        );

        localStorage.setItem("token", data.token);

        navigate("/home"); 

    } catch (error) {
        console.error(error);
        setErrorMessage("Invalid username or password");
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

        <div className="relative w-full">
        <InputField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-blue"
        >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        </div>

        {errorMessage && (
        <p className="text-red-500 text-sm font-semibold text-center">
            {errorMessage}
        </p>
        )}

        <ButtonLarge onClick={handleSave} text="Save" />
    </div>
    );
}
