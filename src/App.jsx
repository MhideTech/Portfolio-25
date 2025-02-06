import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "animate.css";
import { useEffect, useState } from "react";
import Loader from "./ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 8000); // Hide loader after 8s

    const checkReadyState = () => {
      if (document.readyState === "complete") {
        setIsLoading(false);
        clearTimeout(timeout);
      }
    };

    document.addEventListener("readystatechange", checkReadyState);
    window.addEventListener("load", checkReadyState);

    return () => {
      document.removeEventListener("readystatechange", checkReadyState);
      window.removeEventListener("load", checkReadyState);
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
