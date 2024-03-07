import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My name is kennedy kiprono passionate software developer visit the page to find more about thank you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
