// Página principal de configuración de accesibilidad
// Combina todos los componentes de ajustes en una interfaz completa

import Header from "../reusableComponents/Header";
import Footer from "../reusableComponents/Footer";
import AccessibilityCard from "./AccessibilityCard";


export default function Accessibility() {



  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex justify-center items-center mb-10">
        <AccessibilityCard />
      </main>

      <Footer />
    </div>
  );
}
