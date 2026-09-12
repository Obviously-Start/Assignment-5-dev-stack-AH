import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/technology";
import Footer from "./components/Footer";
import type { Technology as TechnologyType } from "./types/technology";

function App() {
  const [stack, setStack] = useState<TechnologyType[]>([]);

  return (
    <>
      <Navbar />
      <Hero />
      <Technology stack={stack} setStack={setStack} />
       <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;