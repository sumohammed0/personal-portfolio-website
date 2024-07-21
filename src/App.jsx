import './App.css'
import Contact from './sections/Contact/Contact.jsx';
import Footer from './sections/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills.jsx';
import Projects from './sections/projects/Projects.jsx';


function App() {
    return <>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>; 
}

export default App;
