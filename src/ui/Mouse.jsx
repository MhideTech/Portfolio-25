import "./../styles/animate.css";

function Mouse() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col justify-center gap-2">
      <div className="flex justify-center p-2 border-2 border-gray-400 h-12 w-7 rounded-full mx-auto">
        <div className="w-3 h-3 bg-gray-400 rounded-full mouse-animate"></div>
      </div>
        <p className="text-center text-white">Click to Lorem Ipsum</p>
    </div>
  );
}

export default Mouse;
