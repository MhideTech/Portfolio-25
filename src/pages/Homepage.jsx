import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Mouse from "../ui/Mouse";
import NameBadge from "../ui/NameBadge";
import Project from "../ui/Project";
import SectionHeadline from "../ui/SectionHeadline";
import Skills from "../ui/Skills";

function Homepage() {
  return (
    <>
      <div className="h-screen background relative flex flex-col justify-center items-center w-full rounded">
        <Header />
        <div className="w-40 h-40 rounded-full border-4 border-gray-600 relative flex mb-10 hover:grayscale-[60%]">
          <img
            src="src/assets/images/me2.jpeg"
            alt="Okefolahan Olamide Israel"
            className="w-full h-full rounded-full object-cover pointer-events-none"
          />
          <NameBadge />
        </div>

        <h1 className="text-gray-800 text-4xl lg:text-6xl mb-5 font-bold tracking-wide md:w-2/4 text-center">
          Fullstack Web and Mobile App Developer
        </h1>

        <ul className="list-disc text-black flex gap-10 md:gap-20 text-3xl md:text-4xl font-bold mt-5 test outlined-text tracking-wide">
          <li>iBuild</li>
          <li>iCreate</li>
          <li>iDesign</li>
        </ul>

        <Mouse />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 text-transparent bg-clip-text">
        I take no hidden shortcuts, <br />
        only clear paths to excellence.
      </div>
      <br />
      <br />
      <br />

      <SectionHeadline>Skills</SectionHeadline>
      <Skills />

      <SectionHeadline>Projects</SectionHeadline>
      <Project />

      <Footer />
    </>
  );
}

export default Homepage;
