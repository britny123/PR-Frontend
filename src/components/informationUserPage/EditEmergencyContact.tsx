import Footer from "../reusableComponents/Footer";
import EmergencyEdit from "./EmergencyEdit";
import Header from "../reusableComponents/Header";

export default function EditEmergencyContact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
        <EmergencyEdit />
      </main>

      <Footer />

    </div>
  );
}