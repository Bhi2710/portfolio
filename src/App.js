import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Type from './Components/Autotype/Type';
import Footer from './Components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <main>
      <Navbar/>
      <Type />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Footer/>
    </main>    
  );
}

export default App;
