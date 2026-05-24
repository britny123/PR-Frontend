// Componente para seleccionar el idioma
// Permite cambiar entre diferentes idiomas disponibles en la aplicación

import { useState } from "react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ["English", "Español", "Português", "Français"];

  return (
    <div className="w-full">
      <p className="block text-lg text-center paragraph opacity-40 mb-2 font-medium">Idiom</p>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 border border-blue rounded-full opacity-40 flex justify-between items-center hover:border-blue transition-colors"
        >
          <p className="text-gray-500 paragraph">{selectedLanguage}</p>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-blue rounded-lg shadow-lg z-10">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onLanguageChange(lang);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left paragraph hover:text-blue transition-colors ${
                  selectedLanguage === lang ? " text-blue" : "text-gray-500"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
