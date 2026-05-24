// Página principal de configuración de accesibilidad
// Combina todos los componentes de ajustes en una interfaz completa

import { useState } from "react";
import Header from "../reusableComponents/Header";
import Footer from "../reusableComponents/Footer";
import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import LanguageSelector from "./LanguageSelector";
import FontSettings from "./FontSettings";
import AccessibilityToggle from "./AccessibilityToggle";

export default function Accessibility() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [fontSize, setFontSize] = useState(100);
  const [fontWeight, setFontWeight] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);

  const handleResetSettings = () => {
    setSelectedLanguage("English");
    setFontSize(100);
    setFontWeight(false);
    setLetterSpacing(false);
    setTextToSpeech(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex justify-center items-center mb-10 px-4">
        <div className="w-full max-w-sm bg-white rounded-[30px] border border-gray-300 flex flex-col gap-6 p-6 sm:p-10 justify-center items-center shadow-lg">
          {/* Title */}
          <h2 className="w-full h-10 rounded-full color-blue text-white text-xl font-bold text-center p-2 title">
            Accessibility settings
          </h2>

          {/* Language Selector */}
          <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />

          {/* Font Settings */}
          <FontSettings
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            onFontSizeChange={setFontSize}
            onFontWeightChange={setFontWeight}
            onLetterSpacingChange={setLetterSpacing}
          />

          {/* Text to Speech Toggle */}
          <AccessibilityToggle textToSpeech={textToSpeech} onTextToSpeechChange={setTextToSpeech} />

          {/* Reset Settings Button */}
          <ButtonLarge onClick={handleResetSettings} text="Reset settings" />

          {/* Exit Button */}
          <ButtonSmall onClick={() => {}} text="Exit" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
