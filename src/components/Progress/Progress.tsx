"use client";
import { useEffect, useState } from "react";

export const Progress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bottom-0 left-0 z-10 fixed bg-neutral w-full h-1">
      <section
        className="top-0 left-0 absolute bg-primary h-1"
        style={{ width: `${scrollWidth}%` }}
      />
    </section>
  );
};
