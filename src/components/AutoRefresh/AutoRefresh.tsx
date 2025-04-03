"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

let AutoRefreshWrapper = ({ children }: PropsWithChildren) => children;

if (process.env.NODE_ENV === "development") {
  AutoRefreshWrapper = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
      const ws = new WebSocket("ws://localhost:3201");
      ws.onmessage = (event) => {
        if (event.data === "refresh") {
          router.refresh();
        }
      };
      return () => {
        ws.close();
      };
    }, [router]);
    return children;
  };
}

export const AutoRefresh = AutoRefreshWrapper;
