import React from 'react';
import Home from './pages/Home';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

function App() {
  return (
    <ThemeLanguageProvider>
      <Home />
    </ThemeLanguageProvider>
  );
}

export default App;