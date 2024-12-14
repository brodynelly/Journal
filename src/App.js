import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JournalForm from './components/JournalForm';
import JournalEntries from './components/JournalEntries';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<JournalForm />} />
            <Route path="/entries" element={<JournalEntries />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
