import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavigationBar from './Components_Folder/Navigation-Bar';
import Home from './Components_Folder/Home';
import Skills from './Components_Folder/Skills';
import Education from './Components_Folder/Education';
import Projects from './Components_Folder/Projects';
import About from './Components_Folder/About';
import Contact from './Components_Folder/Contact';
import ProjectView from './Components_Folder/ProjectView';
import Footer from './Components_Folder/Footer';
import TopButton from './Components_Folder/TopButton';
import MyResume from './Components_Folder/MyFinalResume';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<MyResume/>}/>
        <Route path='/projects/:id' element={<ProjectView />}/>
      </Routes>
      <TopButton/>
      <Footer/>
    </div>
  );
}

export default App;
