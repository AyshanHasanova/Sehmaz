import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Səhifə komponentlərini burada import etdiyini fərz edirik
// import Home from './pages/Home';
// import Explore from './pages/Explore';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<div className="p-10 text-center">Ana Səhifə</div>} />
            <Route path="/explore" element={<div className="p-10 text-center">Səhmlər Səhifəsi</div>} />
            <Route path="/learn" element={<div className="p-10 text-center">Öyrən Bölməsi</div>} />
            <Route path="/simulator" element={<div className="p-10 text-center">Simulyator</div>} />
            {/* 404 Səhifəsi */}
            <Route path="*" element={<div className="p-10 text-center text-red-500">Səhifə tapılmadı!</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


