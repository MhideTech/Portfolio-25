import { FaAngleDoubleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 pt-16 pb-8 px-8 mt-10">
      <div className="mb-6 animate__animated animate__fadeInUp">
        <div className="flex items-center justify-center w-fit h-fit bg-gray-200 rounded-full p-3">
          <img
            src="/images/deal.png"
            alt="Handshake deal"
            className="w-16 m-0"
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6 animate__animated animate__fadeInUp">
        Tell me about your <br /> next project
      </h2>

      <div className="flex space-x-4 animate__animated animate__fadeInUp">
        <a
          href="mailto:okefolahanolamide2006@gmail.com"
          className="flex items-center px-8 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-800"
        >
          Send me an email
        </a>
      </div>

      <div className="mt-12 flex justify-between w-full text-gray-800 items-end">
        <p className="text-md animate__animated animate__fadeInLeft">
          © {date} All rights reserved.
        </p>
        {/* <p className="flex items-center gap-2">
          <span>Back to Top</span> <FaAngleDoubleUp />
        </p> */}
        <div className="flex gap-2 text-center flex-col animate__animated animate__fadeInRight">
          <p>My Social Handles:</p>
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
}

export default Footer;
