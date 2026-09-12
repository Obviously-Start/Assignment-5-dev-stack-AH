
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/technology";
import type { Technology as TechnologyType } from "./types/technology";

function App() {
  const [stack, setStack] = useState<TechnologyType[]>([]);

  return (
    <>
      <Navbar />
      <Hero />

      <Technology
        stack={stack}
        setStack={setStack}
      />
    </>
  );
}

export default App;


