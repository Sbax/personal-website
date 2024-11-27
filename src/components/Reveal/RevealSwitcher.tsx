import { RevealClient } from "@/components/Reveal/RevealClient";
import { FC } from "react";

export const RevealSwitcher: FC<{ children: string }> = ({ children }) => {
  const isClient = typeof window === "undefined";

  if (isClient) return <RevealClient>{children}</RevealClient>;

  return <>{children}</>;
};
