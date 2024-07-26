import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from"./components/Hero";
import Pricing from "./components/Pricing";
import BMICalculator from "./components/BMICalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkoutSession from "./components/WorkoutSession"
import Gallery from  "./components/Gallery";
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "./components/Signup";


function App() {
  return (
    <>
    {/* <Signup/> */}
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSession />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
        <ToastContainer theme="dark" position="top-center"/>

      </Router>
    </>
  );
}

export default App;
