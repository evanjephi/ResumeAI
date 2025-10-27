import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ResumeProvider } from './contexts/ResumeContext';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResumeProvider>
            <App />
        </ResumeProvider>
    </React.StrictMode>
);