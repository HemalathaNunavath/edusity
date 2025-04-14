import React, {useState} from 'react';
import { Element } from 'react-scroll';
import './index.css'

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

 const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>

      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
      </div>

      <Element name="programs">
        <Programs />
      </Element>

      <Element name="about">
        <About setPlayState = {setPlayState}/>
      </Element>

      <Title subTitle="Gallery" title="Campus Photos" />

      <Element name="campus">
        <Campus />
      </Element>

      <Title subTitle="TESTIMONIALS" title="What Student Says" />

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Title subTitle="Contact Us" title="Get in Touch" />

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
      <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  );
};

export default App;
