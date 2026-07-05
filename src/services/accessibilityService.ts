import type { AccessibilitySettings } from "../components/accesibilityPage/accessibilitySettings";

const STORAGE_KEY = "accessibilitySettings";

export const getAccessibilitySettings = async (): Promise<AccessibilitySettings> => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return getLocalAccessibilitySettings();
    }

    const response = await fetch(
      "https://prback-1.onrender.com/api/accessibility",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.warn("Failed to fetch accessibility settings from backend, using local storage");
      return getLocalAccessibilitySettings();
    }

    const data = await response.json();

    return {
      fontSize: data.fontSize,
      fontWeight: data.fontWeight,
      letterSpacing: data.letterSpacing,
      textToSpeech: data.textToSpeech,
    };
  } catch (error) {
    console.error("Error fetching accessibility settings:", error);
    return getLocalAccessibilitySettings();
  }
};

export const saveAccessibilitySettings = async (
  settings: AccessibilitySettings
): Promise<void> => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      saveLocalAccessibilitySettings(settings);
      return;
    }

    const response = await fetch(
      "https://prback-1.onrender.com/api/accessibility",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      }
    );

    if (!response.ok) {
      console.warn("Failed to save accessibility settings to backend, using local storage");
      saveLocalAccessibilitySettings(settings);
    }
  } catch (error) {
    console.error("Error saving accessibility settings:", error);
    saveLocalAccessibilitySettings(settings);
  }
};

const getLocalAccessibilitySettings = (): AccessibilitySettings => {
  const settings = localStorage.getItem(STORAGE_KEY);

  if (!settings) {
    return {
      fontSize: 100,
      fontWeight: false,
      letterSpacing: false,
      textToSpeech: false,
    };
  }

  return JSON.parse(settings);
};

const saveLocalAccessibilitySettings = (settings: AccessibilitySettings): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};
