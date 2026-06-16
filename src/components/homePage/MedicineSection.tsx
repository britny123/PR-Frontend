import MedicineGallery from "./MedicineGallery";

interface MedicineSection {
  medicines: {
    id: number;
    name: string;
    dose: string;
    time: string;
    nextDose: string;
    icon: string;
  }[];
}

function MedicineSection({ medicines }: MedicineSection) {
  return (
    <section className="py-5 md:py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue title md:pl-17 md:text-3xl md:mb-8">Your medicines</h2>

      <MedicineGallery medicines={medicines} />
    </section>
  );
}

export default MedicineSection;
