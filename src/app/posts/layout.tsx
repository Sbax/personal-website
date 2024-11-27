import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer className="space-x-4 my-4">
        <Link href="/" className="link link-primary-bg">
          go to /
        </Link>
      </footer>
    </>
  );
}
