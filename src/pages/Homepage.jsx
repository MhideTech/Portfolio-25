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

        <h1 className="bg-gradient-to-r from-blue-600 via-red-500 to-red-900 text-transparent bg-clip-text text-4xl md:text-5xl xl:text-6xl xl:mb-5 font-bold tracking-wide md:w-7/12 text-center mt-12 lg:mt-0 animate__animated animate__flipInX">
          Fullstack Web and Mobile App Developer
        </h1>

        <ul
          className="list-disc flex gap-10 md:gap-20 text-3xl md:text-4xl font-bold mt-5 test tracking-wide animate__animated animate__fadeInUp w-fit mx-auto dark:text-gray-200"
          id="hero-ul"
        >
          <li className="">iBuild</li>
          <li>iCreate</li>
          <li>iDesign</li>
        </ul>

        <a
          href="\resume\Okefolahan Olamide Resume.pdf"
          download={true}
          className="text-2xl mt-8 px-8 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
        >
          Download CV
        </a>

        <Mouse />
      </div>

      {isFormOpen && (
        <ContactForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      )}

      <About />

      <Skills />

      <Project />

      <Footer />
    </>
  );
}

export default Homepage;
