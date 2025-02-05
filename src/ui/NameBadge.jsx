import "./../styles/animate.css";
import SocialMediaIcons from "./SocialMediaIcons";

function NameBadge() {
  return (
    <div className="-bottom-14 badge-animate flex flex-col absolute lg:top-0 lg:left-[80%] gap-2">
      <div className="py-3 px-4 xl:p-4 rounded-full bg-gray-800 text-gray-50 dark:bg-gray-200 dark:text-gray-800">
        <p className="whitespace-nowrap xl:text-lg">👋 Okefolahan Olamide</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
}

export default NameBadge;
