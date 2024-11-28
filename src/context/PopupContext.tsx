"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type PopupType = "success" | "error";

interface PopupProps {
  message: string;
  type: PopupType;
}

interface PopupContextProps {
  message: string;
  type: PopupType;
  isOpen: boolean;
  showPopup: ({ message, type }: PopupProps) => void;
  hidePopup: () => void;
}

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popup, setPopup] = useState<{
    message: string;
    type: PopupType;
  } | null>(null);

  const showPopup = ({ message, type }: PopupProps) => {
    setPopup({ message, type });
  };

  const hidePopup = () => {
    setPopup(null);
  };

  return (
    <PopupContext.Provider
      value={{
        message: popup?.message || "",
        type: popup?.type || "success",
        isOpen: !!popup,
        showPopup,
        hidePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
