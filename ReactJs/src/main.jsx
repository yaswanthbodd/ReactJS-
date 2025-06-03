import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import GlobalState from './components/context/index.jsx'; // <- this is your provider component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>
);
