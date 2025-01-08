import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds();

  return (
    <div className="px-6 py-1 bg-white rounded-full font-sub text-xl relative overflow-hidden">
      <div className="flex items-center justify-center">
        <p className="time-part transition-all duration-500 ease-in-out flex items-center space-x-1">
          <span className="tracking-wider">{hours}</span>
          <span
            className={`${seconds % 2 === 0 ? "opacity-100" : "opacity-0"}`}
          >
            :
          </span>
          <span className="tracking-wider">{minutes}</span>
        </p>
      </div>
    </div>
  );
}

export default Time;
