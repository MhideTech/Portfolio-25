import { useEffect, useState } from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
import useMode from "../hooks/useMode";
import { BsMoonFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

function ModeSwitcher() {
  const [colorTheme, setTheme] = useMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const theme = localStorage.getItem("theme");
  useEffect(
    function () {
      const hero = document.querySelector("#hero");
      const heroUl = document.querySelector("#hero-ul");
      if (theme !== "light") {
        hero.classList.remove("background-dark");
        heroUl.classList.remove("outlined-text-dark");
        hero.classList.add("background");
        heroUl.classList.add("outlined-text");
    } else {
        hero.classList.remove("background");
        heroUl.classList.remove("outlined-text");
        hero.classList.add("background-dark");
        heroUl.classList.add("outlined-text-dark");
      }
    },
    [theme]
  );

  return (
    <>
      <div>
        {colorTheme === "light" ? (
          <LuSun onClick={toggleDarkMode} values={darkSide.toString()} />
        ) : (
          <BsMoonFill onClick={toggleDarkMode} values={darkSide.toString()} />
        )}
      </div>
    </>
  );
}

export default ModeSwitcher;
