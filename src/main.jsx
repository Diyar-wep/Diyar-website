import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeLanguageProvider>
    <App />
  </ThemeLanguageProvider>
);
