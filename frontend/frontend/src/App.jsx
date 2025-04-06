// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiagnosticsTable from './pages/DiagnosticsTable';
import ChartsPage from './pages/ChartsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DiagnosticsTable />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
