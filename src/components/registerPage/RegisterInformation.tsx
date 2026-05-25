import Footer from "../reusableComponents/Footer";
import Header from "../reusableComponents/Header";
import { useNavigate } from 'react-router-dom';
import ReturnButton from "../reusableComponents/ReturnButton";
import RegisterInfoCard from "./RegisterInfoCard";

export default function RegisterInformation() {
    const navigate = useNavigate();
return (
        <div className="min-h-screen flex flex-col bg-white">

        <Header />
        <div className="md:mt-10">
            <ReturnButton onClick={() => navigate('/')} />
        </div>

        <main className="flex-1 flex justify-center items-center mb-10">
            <RegisterInfoCard/>
        </main>
        <Footer />

    </div>
);
}