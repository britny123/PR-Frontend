import type { AccessibilitySettings } from "./accessibilitySettings";

export const applyAccessibilitySettings = (
  settings: AccessibilitySettings
): void => {

  document.documentElement.style.setProperty(
  "--accessibility-font-scale",
  `${settings.fontSize / 100}`
);
  /*
  document.documentElement.style.setProperty(
    "--accessibility-font-scale",
    `${settings.fontSize}%`
  );
*/
  document.documentElement.style.setProperty(
    "--accessibility-font-weight",
    settings.fontWeight ? "700" : "400"
  );

  document.documentElement.style.setProperty(
    "--accessibility-letter-spacing",
    settings.letterSpacing ? "2px" : "normal"
  );
};