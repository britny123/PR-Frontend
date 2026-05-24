interface Icon {
  name: string;
  src: string;
}

interface MedicineIconProps {
  icons: Icon[];
  selectedIcon: string | null;
  setSelectedIcon: (icon: string | null) => void;
}

export default function MedicineIcon({ icons, selectedIcon, setSelectedIcon }: MedicineIconProps) {
  return (
    <div className="flex  gap-3 w-full items-center">
      <p className="opacity-40 paragraph text-sm font-semibold m-2">Icon</p>
      <div className="flex gap-2 justify-center">
        {icons.map((icon) => (
          <button
            key={icon.src}
            onClick={() => setSelectedIcon(icon.src)}
            className={`m-2 w-12.5 h-12.5 rounded-full flex items-center justify-center transition-all duration-200 ${
              selectedIcon === icon.src
                ? "border-2 border-blue shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img src={icon.src} alt={icon.name} className="w-8 h-8 object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
