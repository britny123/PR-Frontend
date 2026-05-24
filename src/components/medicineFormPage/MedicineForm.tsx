import Header from "../reusableComponents/Header";
import Footer from "../reusableComponents/Footer";
import MedicineFormCard from "../medicineFormPage/MedicineCard";

export default function MedicineForm() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
            <MedicineFormCard /> 
      </main>

      <Footer />

    </div>
  );
}