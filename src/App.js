import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import Footer from './components/footer/footer.component';
import EducationPage from './pages/education/education.page';
import ProjectPage from './pages/projects/projects.page';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/ketki-me' element={<HomePage/>}/>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/projects' element={<ProjectPage/>} />
            <Route exact path='/education' element={<EducationPage/>} />
          </Routes>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default App;
