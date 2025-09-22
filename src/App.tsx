import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import HomePage from './components/HomePage';
import LinksPage from './components/LinksPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Analytics debug={false} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;