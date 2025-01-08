import Header from "../ui/Header";
import Mouse from "../ui/Mouse";
import NameBadge from "../ui/NameBadge";

function Homepage() {
  return (
    <div className="h-screen background relative flex flex-col justify-center items-center w-full">
      <Header />
      <div className="w-44 h-44 rounded-full border-4 border-gray-600 relative flex mb-10 hover:grayscale-[60%]">
        <img
          src="src/assets/images/me2.jpeg"
          alt="Okefolahan Olamide Israel"
          className="w-full h-full rounded-full object-cover pointer-events-none"
        />
        <NameBadge />
      </div>

      <h1 className={`text-white text-5xl m-0 font-bold`}>
        Fullstack Web and Mobile App Developer
      </h1>
      <ul className="list-disc test text-white flex gap-20 text-4xl font-bold mt-5">
        <li className="">iBuild</li>
        <li>iCreate</li>
        <li>iDesign</li>
      </ul>

      <Mouse />
    </div>
  );
}

export default Homepage;
