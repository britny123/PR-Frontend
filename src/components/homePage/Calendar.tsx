import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface MedicineCalendarProps {
  medicineDays?: Date[];
}

export function MedicineCalendar({ medicineDays = [] }: MedicineCalendarProps) {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-3xl border border-gray-200 flex flex-col items-center overflow-x-auto sm:p-6 md:p-10">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        navLayout="around"
        captionLayout="label"
        modifiers={{ medicine: medicineDays }}
    
        modifiersClassNames={{
            medicine: "bg-blue-100 text-blue-900 rounded-full font-semibold",
            selected: "color-water-blue text-white rounded-full",
            today: "border-2 border-blue w-8 h-8 flex items-center justify-center rounded-full",
        }}
        classNames={{ 
        caption_label: "text-lg font-bold text-blue md:text-xl",
        day_button: "text-base font-semibold md:text-lg",
        month_grid: "border-separate border-spacing-1",
        weekday: "text-sm font-medium p-1 md:text-base md:p-2"
    }}

      />
      {/* Leyenda */}
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-700">
        <div className="w-3 h-3 bg-blue-100 rounded-full border border-blue-900"></div>
        <p>Días con medicinas programadas</p>
      </div>
    </div>
  );
}
