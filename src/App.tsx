import React, { useEffect } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  useEffect(() => {
    document.title = 'Swaple';
  }, []);
  return (
    <div className='App'>
      <h1 style={{ marginBottom: '5rem' }}>Swaple</h1>
      <Main />
    </div>
  );
}

export default App;
