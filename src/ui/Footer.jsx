import { FaAngleDoubleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 pt-16 pb-8 px-8 mt-10">
      <div className="mb-6">
        <div className="flex items-center justify-center w-fit h-fit bg-gray-200 rounded-full p-3">
          <img
            src="/images/deal.png"
            alt="Handshake deal"
            className="w-16 m-0"
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Tell me about your <br /> next project
      </h2>

      <div className="flex space-x-4">
        <a
          href="mailto:okefolahanolamide2006@gmail.com"
          className="flex items-center px-8 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-800"
        >
          Send me an email
        </a>
      </div>

      <div className="mt-12 flex justify-between w-full text-gray-800 items-end">
        <p className="text-md">© {date} All rights reserved.</p>
        {/* <p className="flex items-center gap-2">
          <span>Back to Top</span> <FaAngleDoubleUp />
        </p> */}
        <div className="flex gap-2 text-center flex-col">
          <p>My Social Handles:</p>
          <div className="flex gap-4 md:gap-5">
            <FaGithub className="text-2xl -rotate-6" />
            <FaLinkedin className="text-2xl rotate-6" />
            <FaSquareXTwitter className="text-2xl -rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
