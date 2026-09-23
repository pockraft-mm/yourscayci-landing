import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { landingPage } from './data/project';
import '../style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App config={landingPage} />
  </StrictMode>,
);
