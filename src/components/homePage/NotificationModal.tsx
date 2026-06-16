interface NotificationModalProps {
  isOpen: boolean;
  medicineName: string;
  dose: string;
  time: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function NotificationModal({
  isOpen,
  medicineName,
  dose,
  time,
  onConfirm,
  onClose,
}: NotificationModalProps) {
  //verifica si debe mostrarse la notificación, si es falso no muestra nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl w-87.5 p-10 shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl">🔔</div>

          <h2 className="text-blue title font-bold text-2xl text-center">
            Time for your medication
          </h2>

          <div className="text-center">
            <p className="paragraph font-semibold text-gray-700 text-lg">
              {medicineName}
            </p>

            <p className="paragraph text-gray-500 text-sm">{dose}</p>

            <p className="paragraph text-gray-500 text-sm">{time}</p>
          </div>

          <div className="flex gap-6 mt-6 w-full">
            <button
              onClick={onConfirm}
              className="flex-1 h-12 rounded-full color-blue text-white font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-1 cursor-pointer flex items-center justify-center text-xl"
            >
              ✓
            </button>

            <button
              onClick={onClose}
              className="flex-1 h-12 rounded-full border-2 border-blue text-blue font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-gray-50 cursor-pointer flex items-center justify-center text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
