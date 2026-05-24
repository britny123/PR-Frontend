import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import FontSettings from "./FontSettings";
import AccessibilityToggle from "./AccessibilityToggle";
import { useState } from "react";


export default function AccessibilityCard() {
  const [fontSize, setFontSize] = useState(100);
  const [fontWeight, setFontWeight] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);

    const handleResetSettings = () => {
    setFontSize(100);
    setFontWeight(false);
    setLetterSpacing(false);
    setTextToSpeech(false);
  };

  return (
        <div className="w-87.5 bg-white rounded-4xl border border-gray-300 flex flex-col gap-4 p-6 sm:p-10 justify-center items-center">
          {/* Title */}
          <h2 className="w-full h-10 rounded-full color-blue text-white text-xl font-bold text-center p-2 title">
            Accessibility settings
          </h2>

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
  )

}