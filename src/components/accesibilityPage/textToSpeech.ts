import { getAccessibilitySettings } from "../../services/accessibilityService";

export const speak = (text: string): void => {

    const settings = getAccessibilitySettings();

    if (!settings.textToSpeech) {
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);
};