import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StyledPage from './StyledPage';
import TailwindPage from './TailwindPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className="p-4 flex gap-4">
        <Link to="/styled" className="text-blue-500">Styled Components</Link>
        <Link to="/tailwind" className="text-blue-500">Tailwind CSS</Link>
      </div>
      <Routes>
        <Route path="/styled" element={<StyledPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);