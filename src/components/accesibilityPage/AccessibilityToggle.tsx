// Componente para habilitar/deshabilitar text-to-speech
// Toggle switch para opciones de accesibilidad adicionales
import { speak } from "../accesibilityPage/textToSpeech";

interface AccessibilityToggleProps {
  textToSpeech: boolean;
  onTextToSpeechChange: (enabled: boolean) => void;
}

export default function AccessibilityToggle({ textToSpeech, onTextToSpeechChange }: AccessibilityToggleProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <button
      onClick={() => onTextToSpeechChange(!textToSpeech)} onMouseEnter={() => void speak("Text to speech Button")}
        className={`w-full min-h-12 cursor-pointer px-10 py-2 rounded-full paragraph transition-all border-2 ${
          textToSpeech
            ? "bg-blue text-gray-400 border-blue"
            : "bg-white text-gray-400 border-gray-300 hover:border-blue"
        }`}
      >
        {textToSpeech ? "Enable" : "Disable"} text to speech
      </button>
    </div>
  );
}
