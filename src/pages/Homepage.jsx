import Header from "../ui/Header";
import Mouse from "../ui/Mouse";
import NameBadge from "../ui/NameBadge";

function Homepage() {
  return (
    <div className="p-2 h-screen bg-[#8d8d8b]">
      <div className="h-full background relative flex flex-col justify-center items-center w-full rounded">
        <Header />
        <div className="w-40 h-40 rounded-full border-4 border-gray-600 relative flex mb-10 hover:grayscale-[60%]">
          <img
            src="src/assets/images/me2.jpeg"
            alt="Okefolahan Olamide Israel"
            className="w-full h-full rounded-full object-cover pointer-events-none"
          />
          <NameBadge />
        </div>

        <h1 className="text-white text-6xl mb-5 font-bold tracking-wide w-2/4 text-center">
          Fullstack Web and Mobile App Developer
        </h1>
        <ul className="list-disc text-white flex gap-20 text-4xl font-bold mt-5 test">
          <li className="">iBuild</li>
          <li>iCreate</li>
          <li>iDesign</li>
        </ul>

        <Mouse />
      </div>
    </div>
  );
}

export default Homepage;
