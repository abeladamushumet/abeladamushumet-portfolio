import React from 'react';
import App from './App.jsx';
import './styles/themes.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/portfolio.css';
import './styles/chatbot.css';

// Using createRoot correctly for React 18+
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
