import type { Metadata } from "next";
import styles from "./page.module.css";
import '@/app/global.css'

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
      
      <body className={`${styles.main} madimi-one-regular`}>{children}</body>
    </html>
  );
}
