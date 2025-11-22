import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import HomePage from './pages/HomePage.jsx';
import Background3D from './components/Background3D.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Background3D />
      <HomePage />
    </div>
  );
}

export default App;
