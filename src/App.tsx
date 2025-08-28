import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50 text-gray-600 min-h-screen">
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

