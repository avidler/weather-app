import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./sass/app.scss";

import TopSection from './components/top/top'
import BottomSection from './components/bottom/bottom'

function App() {
  return (
    <div className="app-container">
      <div className="main-container">Making a change
        <div className="top-section"><TopSection /></div>
        <div className="bottom-section"><BottomSection />App</div>
      </div>
    </div>
  );
}

export default App;
