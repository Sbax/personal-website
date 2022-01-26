import React, { useEffect, useState } from "react";
import Baffle from "baffle-react";

function Reveal({ children }) {
  const [obfuscate, setObfuscate] = useState();

  const characters = [
    "█",
    "▓",
    "▒",
    "░",
    "█",
    "▓",
    "▒",
    "░",
    "█",
    "▓",
    "▒",
    "░",
    "<",
    ">",
    "/",
  ];

  useEffect(() => {
    setTimeout(() => {
      setObfuscate(false);
    }, 500);
  }, []);

  return (
    <Baffle
      speed={50}
      characters={characters}
      exclude={[" ", "!"]}
      obfuscate={obfuscate}
      revealDuration={500}
      revealDelay={0}
    >
      {children}
    </Baffle>
  );
}

export default Reveal;
