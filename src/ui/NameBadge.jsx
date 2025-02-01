import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../styles/animate.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function NameBadge() {
  return (
    <div className="badge-animate flex flex-col absolute top-0 left-[80%] gap-2">
      <div className="py-3 px-4 xl:p-4 rounded-full bg-gray-800 text-gray-50 ">
        <p className="whitespace-nowrap xl:text-lg">👋 Okefolahan Olamide</p>
      </div>
      <div className="flex gap-4 md:gap-5 w-fit mx-auto">
        <FaGithub className="text-xl -rotate-6" />
        <FaLinkedin className="text-xl rotate-6" />
        <FaSquareXTwitter className="text-xl -rotate-6" />
        <MdEmail className="text-xl rotate-6" />
      </div>
    </div>
  );
}

export default NameBadge;
