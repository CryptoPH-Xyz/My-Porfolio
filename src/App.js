import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
    </>
  );
}

export default App;
