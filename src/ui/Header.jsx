import Button from "./Button";
import Logo from "./Logo";
import Time from "./Time";

function Header() {
  return (
    <div className="flex justify-between items-center px-3 md:px-10 py-2 absolute top-5 w-11/12 md:w-full mx-auto bg-gray-50 border border-gray-800 rounded-full">
      <Time />
      <Logo />
      <div className="flex items-center md:gap-8">
        <span className="text-3xl">🌙</span>
        <Button>Hire Me</Button>
      </div>
    </div>
  );
}

export default Header;
