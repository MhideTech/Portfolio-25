import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SocialMediaIcons() {
  return (
    <div className="flex gap-4 md:gap-5 w-fit mx-auto text-2xl">
      <a
        href="https://github.com/MhideTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="-rotate-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/olamide-okefolahan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="rotate-6" />
      </a>
      <a
        href="https://x.com/MhideTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter className="-rotate-6" />
      </a>
      <a
        href="mailto:okefolahanolamide2006@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="rotate-6" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
