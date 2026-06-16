import { useState } from "react";
import { deleteMedicine } from "../../services/medicineService";
import { useNavigate } from "react-router-dom";

interface MedicineCardProps {
  medicine: {
    id: string;
    name: string;
    dailyDose: string;
    timeTake: string;
    startDate: string;
    endDate: string;
    expirationDate: string;
    icon: string;
  };
}

function MedicineCard({ medicine }: MedicineCardProps) {
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

const handleEdit = () => {
  navigate(`/medicine-form/${medicine.id}`, { state: { medicine } });
};

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
    `Are you sure you want to delete ${medicine.name}?`
  );

  if (!confirmDelete) {
    return;
  }
  try {
    await deleteMedicine(medicine.id);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting medicine:", error);
  }
};

  return (
    <div
      className={`bg-white rounded-3xl p-6 w-full max-w-52 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
        showMore ? "h-98" : "h-64"
      }`}
    >
      <img
        src={medicine.icon}
        alt={medicine.name}
        className="w-10 h-10 mx-auto object-contain"
      />

      <h3 className="text-center font-bold mt-3 text-lg text-blue">
        {medicine.name}
      </h3>

      <div className="mt-4 text-sm space-y-3">
        <div className="flex gap-1">
          <p className="font-semibold paragraph text-gray-700">Dose:</p>
          <p className="text-gray-600">{medicine.dailyDose}</p>
        </div>

        <div className="flex gap-1">
          <p className="font-semibold paragraph text-gray-700">Time:</p>
          <p className="text-gray-600">{medicine.timeTake}</p>
        </div>

        {showMore && (
          <>
            <div className="flex gap-1">
              <p className="font-semibold paragraph text-gray-700">Start:</p>
              <p className="text-gray-600">{medicine.startDate}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-semibold paragraph text-gray-700">End:</p>
              <p className="text-gray-600">{medicine.endDate}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-semibold paragraph text-gray-700">Exp:</p>
              <p className="text-gray-600">{medicine.expirationDate}</p>
            </div>

            <div className="flex justify-start gap-3 mt-4">
  <button onClick={handleEdit} className="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2469A0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pencil"
      aria-hidden="true"
    >
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </svg>
  </button>

  <button onClick={handleDelete} className="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2469A0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-trash"
      aria-hidden="true"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  </button>
</div>
          </>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full h-10 rounded-full color-blue text-white font-semibold transition-all duration-200 hover:-translate-y-1 cursor-pointer"
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
}

export default MedicineCard;
