import React from 'react';
import './index.css';
import TopPage from './Components/TopPage';
import AboutPage from './Components/AboutPage';
import FormationPage from './Components/FormationPage';
import ProjectsPage from './Components/ProjectsPage';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <div className='bg-zinc-900'>
      <TopPage />
      <AboutPage />
      <FormationPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
