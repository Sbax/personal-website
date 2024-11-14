import RevealClient from "@/components/Reveal/RevealClient";
import { FC } from "react";

const RevealSwitcher: FC<{ children: string }> = ({ children }) => {
  const isClient = typeof window !== "undefined";

  if (isClient) return <>{children}</>;

  return <RevealClient>{children}</RevealClient>;
};

export default RevealSwitcher;
