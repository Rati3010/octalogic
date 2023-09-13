import React from 'react';
import './App.css';
import CourseList from './pages/CourseList';
import Overview from './pages/Overview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/about" element={<CourseList />} />
      </Routes>
    </Router>
  );
}

export default App;
