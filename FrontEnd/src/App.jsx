import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.js'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000'); // Make sure the backend is running
        const data = await res.json(); 
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
