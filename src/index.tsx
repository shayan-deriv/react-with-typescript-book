import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return <h1>dddsss</h1>;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);