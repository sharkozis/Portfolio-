import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hossain | Portfolio",
  description: "Designer - Developer Portfolio",
};

import SmoothScroll from "@/components/core/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col relative">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
