import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ResumeProvider } from './contexts/ResumeContext';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ResumeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ResumeProvider>
  );
};

export default App;