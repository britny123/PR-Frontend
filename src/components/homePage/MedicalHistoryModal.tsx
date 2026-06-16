import { X } from "lucide-react";

interface MedicalHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: any[];
}

export default function MedicalHistoryModal({
  isOpen,
  onClose,
  history,
}: MedicalHistoryModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-175 max-h-[80vh] overflow-y-auto p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue">
            Medical History
          </h2>

          <button onClick={onClose}>
            <X/>
          </button>
        </div>

        {history.length === 0 ? (
          <p className="text-gray-500">
            No medical history available.
          </p>
        ) : (
          history.map((medicine) => (
            <div
              key={medicine.id}
              className="border-b border-blue py-4"
            >
              <h3 className="font-semibold text-lg">
                {medicine.medicine_name}
              </h3>

              <p>
                Daily Dose: {medicine.daily_dose}
              </p>

              <p>
                Start Date: {medicine.start_date}
              </p>

              <p>
                End Date: {medicine.end_date}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}