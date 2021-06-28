import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
