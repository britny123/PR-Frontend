import ButtonLarge from "../reusableComponents/LargeButton";
import ButtonSmall from "../reusableComponents/SmallButton";
import FontSettings from "./FontSettings";
import AccessibilityToggle from "./AccessibilityToggle";
import { speak } from "../accesibilityPage/textToSpeech";

import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  getAccessibilitySettings,
  saveAccessibilitySettings
} from "../../services/accessibilityService";

import {
  applyAccessibilitySettings
} from "./accessibilityUtils";

export default function AccessibilityCard() {

  const navigate = useNavigate();

  const [fontSize, setFontSize] = useState(100);
  const [fontWeight, setFontWeight] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await getAccessibilitySettings();
        setFontSize(settings.fontSize);
        setFontWeight(settings.fontWeight);
        setLetterSpacing(settings.letterSpacing);
        setTextToSpeech(settings.textToSpeech);
        applyAccessibilitySettings(settings);
      } catch (error) {
        console.error("Error loading accessibility settings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const settings = {
      fontSize,
      fontWeight,
      letterSpacing,
      textToSpeech
    };

    saveAccessibilitySettings(settings);
    applyAccessibilitySettings(settings);

  }, [
    fontSize,
    fontWeight,
    letterSpacing,
    textToSpeech,
    isLoading
  ]);

  const handleResetSettings = async () => {

    const defaultSettings = {
      fontSize: 100,
      fontWeight: false,
      letterSpacing: false,
      textToSpeech: false
    };

    setFontSize(defaultSettings.fontSize);
    setFontWeight(defaultSettings.fontWeight);
    setLetterSpacing(defaultSettings.letterSpacing);
    setTextToSpeech(defaultSettings.textToSpeech);

    await saveAccessibilitySettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-300 flex flex-col gap-3 p-8 justify-center items-center shadow-sm">
        <p className="paragraph text-gray-500">Loading accessibility settings...</p>
      </div>
    );
  }

  return (
    
    <div className="w-full max-w-md bg-white rounded-3xl border border-gray-300 flex flex-col gap-3 p-8 justify-center items-center shadow-sm">
      <h2 className="w-full rounded-full color-blue text-white text-lg font-bold text-center p-2 title mb-1">
        Accessibility settings
      </h2>

      <FontSettings
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        onFontSizeChange={setFontSize}
        onFontWeightChange={setFontWeight}
        onLetterSpacingChange={setLetterSpacing}
      />

      <AccessibilityToggle
        textToSpeech={textToSpeech}
        onTextToSpeechChange={setTextToSpeech}
      />

      <div className="w-full space-y-2" onMouseEnter={() => void speak("Reset settings Button")}>
        <ButtonLarge
          onClick={handleResetSettings} 
          text="Reset settings"
        />

        <div className="flex justify-center w-full" onMouseEnter={() => void speak("Exit Button")}>
          <ButtonSmall
            onClick={() => navigate("/home")}
            text="Exit"
          />
        </div>
      </div>

    </div>
  );
}