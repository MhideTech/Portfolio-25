import { HiMoon } from "react-icons/hi";
import Button from "./Button";
import Logo from "./Logo";
import Time from "./Time";
import { BsMoonFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";

function Header() {
  return (
    <div className="flex justify-between items-center px-3 md:px-3 py-2 fixed z-50 top-5 w-11/12 md:w-10/12 mx-auto bg-gray-50 border dark:bg-gray-700 border-gray-800 dark:border-gray-200 rounded-full">
      <Time />
      <Logo />
      <div className="flex items-center gap-3 md:gap-8">
        <span className="text-3xl">
          <ModeSwitcher />
        </span>
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}

export default Header;
