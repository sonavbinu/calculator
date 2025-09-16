import React from 'react';
import Calculator from './components/Calculator';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>MyCalci</h2>
      <Calculator />
    </div>
  );
};

export default App;
