import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RegisterProvider } from "./components/RegisterContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REGISTRATION | IEEESBUOM",
  description: "IEEE SB UOM REGISTRATION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:h-[1170px] h-[1475px]`}>
        {children}
      </body>
    </html>
  );
}
