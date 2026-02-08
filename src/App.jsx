import React, { useState } from "react";
import NavBar from "./components/nav_bar/NavBar";
import Hero from "./components/hero/Hero";
import Program from "./components/programs/program";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contactus/ContactUs";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoplayer/VideoPlayer";
const App = () => {
  const[playState, setPlayState]=useState(false);

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PROGRAMS' Title='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' Title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' Title='What Our Students Say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' Title='Get in Touch'/>
        <ContactUs/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
export default App;