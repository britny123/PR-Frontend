import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {
  getAccessibilitySettings
} from "./services/accessibilityService";

import {
  applyAccessibilitySettings
} from "./components/accesibilityPage/accessibilityUtils.ts";

applyAccessibilitySettings(
  getAccessibilitySettings()
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
