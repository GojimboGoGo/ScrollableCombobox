import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollableCombobox from './ScrollableCombobox.jsx';
import "simplebar";
import "simplebar/dist/simplebar.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ScrollableCombobox />
      </header>
    </div>
  );
}

export default App;
