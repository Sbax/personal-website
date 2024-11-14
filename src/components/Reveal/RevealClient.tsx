"use client";

import React, { useEffect, useState } from "react";

interface RevealProps {
  children: string;
  characters?: string;
  exclude?: string[];
  speed?: number;
  revealDuration?: number;
  delay?: number;
}

const RevealClient: React.FC<RevealProps> = ({
  children,
  characters = "█▓▒░█▓▒░█▓▒░<>/",
  exclude = [" ", "!"],
  speed = 50,
  revealDuration = 500,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isRunning, setIsRunning] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const obfuscateText = () => {
      // Simple obfuscation logic to randomize characters
      const obfuscated = children
        .split("")
        .map((char) =>
          exclude.includes(char) || Math.random() > 0.5
            ? char
            : characters[Math.floor(Math.random() * characters.length)]
        )
        .join("");
      setDisplayText(obfuscated);
    };

    const intervalId = setInterval(obfuscateText, speed);
    return () => clearInterval(intervalId);
  }, [isRunning, children, characters, exclude, speed]);

  useEffect(() => {
    const revealText = () => {
      setDisplayText(children);
      setIsRunning(false);
    };

    const revealTimeout = setTimeout(revealText, revealDuration + delay);
    return () => clearTimeout(revealTimeout);
  }, [children, revealDuration, delay]);

  return isClient ? displayText : children;
};

export default RevealClient;
