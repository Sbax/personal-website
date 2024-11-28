import { Popup } from "@/components/Popup";
import { PopupProvider } from "@/context/PopupContext";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PopupProvider>
      <Popup />
      {children}
    </PopupProvider>
  );
}
