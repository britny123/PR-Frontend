import type { AccessibilitySettings } from "../components/accesibilityPage/accessibilitySettings";

const STORAGE_KEY = "accessibilitySettings";

export const getAccessibilitySettings = (): AccessibilitySettings => {

    const settings = localStorage.getItem(STORAGE_KEY);

    if (!settings) {
        return {
            fontSize: 100,
            fontWeight: false,
            letterSpacing: false,
            textToSpeech: false
        };
    }

    return JSON.parse(settings);
};

export const saveAccessibilitySettings = (
    settings: AccessibilitySettings
): void => {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(settings)
    );
};