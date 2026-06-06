

interface MedicineCardProps {
  medicine: {
    id: number;
    name: string;
    dose: string;
    time: string;
    nextDose: string;
    icon: string;
  };
}

function MedicineCard({ medicine }: MedicineCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 w-52 hover:shadow-xl transition-shadow">
      <img
        src={medicine.icon}
        alt={medicine.name}
        className="w-10 h-10 mx-auto object-contain"
      />

      <h3 className="text-center font-bold mt-3 text-lg text-blue">{medicine.name}</h3>

      <div className="mt-4 text-sm space-y-3">
        <div>
          <p className="font-semibold paragraph text-gray-700">Dose:</p>
          <p className="text-gray-600">{medicine.dose}</p>
        </div>

        <div>
          <p className="font-semibold paragraph text-gray-700">Time:</p>
          <p className="text-gray-600">{medicine.time}</p>
        </div>

        <p className="text-gray-500 text-xs paragraph">Next dose in {medicine.nextDose}</p>
      </div>

      <div className="mt-6">
        <button className="w-full h-10 rounded-full color-blue text-white font-semibold transition-all duration-200 hover:-translate-y-1 cursor-pointer">
          See more
        </button>
      </div>
    </div>
  );
}

export default MedicineCard;
