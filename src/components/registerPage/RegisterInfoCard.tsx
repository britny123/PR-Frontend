import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../reusableComponents/InputField";
import ButtonLarge from "../reusableComponents/LargeButton";
import SmallButton from "../reusableComponents/SmallButton";
import { register } from "./../../services/authService";

import { Eye, EyeOff } from "lucide-react";

export default function RegisterInfoCard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleSave = async () => {
        try {
            setErrors({
                email: "",
                username: "",
                password: "",
            });

            const data = await register(
                email,
                username,
                password
            );

            localStorage.setItem("token", data.token);

            navigate("/information-user1");

        } catch (error: any) {
            if (error.errors) {
                setErrors({
                    email: error.errors.email || "",
                    username: error.errors.username || "",
                    password: error.errors.password || "",
                });
            }
        }
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
            {errors.email && (
                <p className="text-red-500 text-sm">
                    {errors.email}
                </p>
            )}

            <InputField
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
                <p className="text-red-500 text-sm">
                    {errors.username}
                </p>
            )}

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
            {errors.password && (
                <p className="text-red-500 text-sm">
                    {errors.password}
                </p>
            )}

            <ButtonLarge onClick={handleSave} text="Save" />
            <SmallButton onClick={() => navigate('/login')} text="Login" />
        </div>
    );
}
