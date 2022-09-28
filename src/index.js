import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// React v18
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);