import { HiMoon } from "react-icons/hi";
import Button from "./Button";
import Logo from "./Logo";
import Time from "./Time";
import { BsMoonFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState("")
  return (
    <div className="flex justify-between items-center px-3 md:px-3 py-2 absolute top-5 w-11/12 md:w-10/12 mx-auto bg-gray-50 border border-gray-800 rounded-full">
      <Time />
      <Logo />
      <div className="flex items-center gap-3 md:gap-8">
        <span className="text-3xl">
          {darkMode ? <BsMoonFill /> : <LuSun />}
        </span>
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}

export default Header;
