// Componente para configurar los ajustes de fuente
// Permite ajustar tamaño de fuente, peso y espaciado de letras

interface FontSettingsProps {
  fontSize: number;
  fontWeight: boolean;
  letterSpacing: boolean;
  onFontSizeChange: (size: number) => void;
  onFontWeightChange: (weight: boolean) => void;
  onLetterSpacingChange: (spacing: boolean) => void;
}

export default function FontSettings({
  fontSize,
  fontWeight,
  letterSpacing,
  onFontSizeChange,
  onFontWeightChange,
  onLetterSpacingChange,
}: FontSettingsProps) {
  return (
    <div className="w-full space-y-6">
      <p className="opacity-40 paragraph w-40 text-center">Font size {fontSize}%</p>

      {/* Font Size Control */}
      <div className="space-y-2">
        <div className="flex justify-center items-center gap-8 border border-blue-opacity p-1 rounded-full">
          <button
            onClick={() => onFontSizeChange(Math.max(fontSize - 10, 80))}
            className="w-8 h-8 rounded-full color-blue text-white font-bold  hover:opacity-80 transition-opacity flex items-center justify-center cursor-pointer"
          >
            −
          </button>
          <p className="opacity-40  paragraph w-40 text-center">Font size {fontSize}%</p>
          <button
            onClick={() => onFontSizeChange(Math.min(fontSize + 10, 150))}
            className="w-8 h-8 rounded-full color-blue text-white font-bold  hover:opacity-80 transition-opacity flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Font Weight and Letter Spacing */}
        <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onFontWeightChange(!fontWeight)}
          className={`cursor-pointer min-w-37.5 min-h-45 px-6 py-3 rounded-lg text-4xl transition-all ${
            fontWeight
              ? "bg-blue text-blue border-2 border-blue"
              : "bg-white text-blue border-2 border-gray-300 hover:border-blue"
          }`}
        >
          <p className={fontWeight ? "font-bold" : "font-normal"}>B</p>
          <p className="paragraph text-black opacity-40 text-center wrap-break-word">Font weight</p>
        </button>
        <button
          onClick={() => onLetterSpacingChange(!letterSpacing)}
          className={`cursor-pointer min-w-37.5 min-h-45 px-6 py-3 rounded-lg text-4xl transition-all ${
            letterSpacing
              ? "bg-blue text-blue border-2 border-blue"
              : "bg-white text-blue border-2 border-gray-300 hover:border-blue"
          }`}
        >
            <p className={letterSpacing ? "tracking-widest" : "tracking-normal"}>A B</p>
            <p className="paragraph text-black opacity-40 text-center wrap-break-word">Letter spacing</p>
        </button>
      </div>
    </div>
  );
}
