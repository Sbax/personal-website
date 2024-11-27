import { getAge } from "@/lib/getAge";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ips = localFont({
  src: "./fonts/ips.woff",
});

export const metadata: Metadata = {
  title: "Matteo Bacci",
  description: `Matteo Bacci, ${getAge()}yo developer from Imola, Italy. About, personal portfolio and blog.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={`${ips.className}`}>
        <main className="m-auto p-4 max-w-screen-lg">{children}</main>
      </body>
    </html>
  );
}
