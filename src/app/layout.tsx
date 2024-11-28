import { ips } from "@/app/fonts";
import { getAge } from "@/lib/getAge";
import "./globals.css";

export async function generateMetadata() {
  const baseUrl = process.env.BASE_URL;

  const title = {
    template: "%s | Matteo Bacci",
    default: "Matteo Bacci",
  };
  const description = `Matteo Bacci, ${getAge()}yo developer from Imola, Italy. About, personal portfolio and blog.`;

  return {
    title,
    description,
    authors: [{ name: "Matteo Bacci" }],
    openGraph: {
      locale: "en_GB",
      type: "article",
      title,
      description,
      siteName: "Matteo Bacci",
    },
    metadataBase: new URL(baseUrl || ""),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={`${ips.className}`}>
        <main className="flex flex-col m-auto p-4 max-w-screen-lg min-h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
