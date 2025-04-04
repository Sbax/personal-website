"use client";

import { usePopup } from "@/context/PopupContext";
import { useCallback, useEffect, useState } from "react";

export const Popup = () => {
  const { isOpen, message, type, hidePopup } = usePopup();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      hidePopup();
    }, 300);
  }, [hidePopup]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
      const timeout = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timeout);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, handleClose]);

  if (!isOpen && !isVisible) return null;

  const bgColorMap: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    neutral: "bg-gray-500",
  };

  const bgColor = (type && bgColorMap[type]) || bgColorMap.neutral;

  return (
    <div
      onClick={handleClose}
      className={`fixed z-10 bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${bgColor}`}
    >
      {message}
    </div>
  );
};
