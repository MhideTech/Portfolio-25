import { Fade, Slide } from "react-awesome-reveal";
import About from "../ui/About";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Mouse from "../ui/Mouse";
import NameBadge from "../ui/NameBadge";
import Project from "../ui/Project";
import SectionHeadline from "../ui/SectionHeadline";
import Skills from "../ui/Skills";
import ContactForm from "../ui/ContactForm";
import { useState } from "react";

function Homepage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div
        className="h-screen relative flex flex-col justify-center items-center w-full rounded"
        id="hero"
      >
        <Header setIsFormOpen={setIsFormOpen} />
        <div className="w-48 lg:w-40 h-48 lg:h-40 rounded-full border-4 border-gray-800 relative flex mb-10 hover:grayscale-[20%] animate__animated animate__fadeInLeft">
          <img
            src="/images/me2.jpeg"
            alt="Okefolahan Olamide Israel"
            className="w-full h-full rounded-full object-cover pointer-events-none"
          />
          <NameBadge />
        </div>
        {/* <Fade
          // delay={200} // Wait 200ms before starting
          duration={3000} // Animation lasts 1 second
          cascade
          delay={1e3}
          damping={1e-1}
          triggerOnce // Only animate once
          fraction={0.5} // Start animation when element is 50% visible
        > */}
        {/* <Slide direction="up" duration={1000} className="w-full flex justify-center"> */}
        <h1 className="bg-gradient-to-r from-blue-600 via-red-500 to-red-900 text-transparent bg-clip-text text-4xl md:text-5xl xl:text-6xl xl:mb-5 font-bold tracking-wide md:w-2/4 text-center mt-12 lg:mt-0 animate__animated animate__flipInX">
          Fullstack Web and Mobile App Developer
        </h1>
        {/* </Slide> */}
        {/* </Fade> */}

        <ul
          className="list-disc flex gap-10 md:gap-20 text-3xl md:text-4xl font-bold mt-5 test tracking-wide animate__animated animate__fadeInUp w-fit mx-auto"
          id="hero-ul"
        >
          <li className="">iBuild</li>
          <li>iCreate</li>
          <li>iDesign</li>
        </ul>

        <Mouse />
      </div>

      {isFormOpen && <ContactForm setIsFormOpen={setIsFormOpen} />}

      <About />

      {/* <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 text-transparent bg-clip-text">
        I take no hidden shortcuts, <br />
        only clear paths to excellence.
      </h1> */}

      <Skills />

      <Project />

      <Footer />
    </>
  );
}

export default Homepage;
