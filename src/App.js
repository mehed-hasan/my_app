import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';



function App() {
  return (

    <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
    </Fragment>

  
  );
}

export default App;
