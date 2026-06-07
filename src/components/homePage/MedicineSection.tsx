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
    <section className="py-8 ">
      <h2 className="text-3xl pl-17 font-bold mb-8 text-blue title h-5">Your medicines</h2>

      <MedicineGallery medicines={medicines} />
    </section>
  );
}

export default MedicineSection;
