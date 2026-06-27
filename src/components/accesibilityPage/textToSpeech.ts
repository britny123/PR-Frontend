import { getAccessibilitySettings } from "../../services/accessibilityService";

export const speak = async (text: string): Promise<void> => {

    try {
        const settings = await getAccessibilitySettings();

        if (!settings.textToSpeech) {
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = "en-US";

        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error("Error in speak function:", error);
    }
};