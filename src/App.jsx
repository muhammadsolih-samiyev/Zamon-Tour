import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Main from './components/Main/main';
import Slider from './components/Slider/slider'
import Selection from './components/Selection/select'
import { ImageAccordion } from './components/Galery/galery'; 
import Contact from './components/ContactSend/contact'
import Footer from './components/Footer/footer'

function App() {
  return (
    <Suspense fallback="Loading...">
      <Navbar />
      <Main />
      <Slider />
      <Selection />
      <ImageAccordion />
      <Contact/>
      <Footer/>
    </Suspense>
  );
}

export default App;
