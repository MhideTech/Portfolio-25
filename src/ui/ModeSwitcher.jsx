import { useEffect, useState } from "react";
import useMode from "../hooks/useMode";
import { BsMoonFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

function ModeSwitcher() {
  const [theme, setTheme] = useMode();
  const [darkSide, setDarkSide] = useState(theme === "dark");

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDarkSide(newTheme === "dark");
  };

  useEffect(() => {
    const hero = document.querySelector("#hero");
    const heroUl = document.querySelector("#hero-ul");

    if (hero && heroUl) {
      if (theme === "dark") {
        hero.classList.remove("background");
        hero.classList.add("background-dark");
        heroUl.classList.remove("outlined-text");
        heroUl.classList.add("outlined-text-dark");
      } else {
        hero.classList.remove("background-dark");
        hero.classList.add("background");
        heroUl.classList.remove("outlined-text-dark");
        heroUl.classList.add("outlined-text");
      }
    }
  }, [theme]);

  return (
    <div>
      {theme === "light" ? (
        <LuSun onClick={toggleDarkMode} />
      ) : (
        <BsMoonFill onClick={toggleDarkMode} />
      )}
    </div>
  );
}

export default ModeSwitcher;
