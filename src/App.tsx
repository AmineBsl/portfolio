import React from 'react';
import './index.css';
import TopPage from './Components/TopPage';
import AboutPage from './Components/AboutPage';
import FormationPage from './Components/FormationPage';

function App() {
  return (
    <div className='bg-zinc-900'>
      <TopPage />
      <AboutPage />
      <FormationPage />
    </div>
  );
}

export default App;
