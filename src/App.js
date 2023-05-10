import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import CV from './Components/CV';
import Contact from './Components/Contact';

function App() {
  return (
    <div> 
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/cv" element={<CV />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
