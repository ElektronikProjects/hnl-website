import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});
const akira = localFont({
  src: "./fonts/AkiraExpandedDemo.otf",
  variable: "--font-akira",
});

export const metadata: Metadata = {
  title: "HNL - Hockey Nations League",
  description: "Hockey Nations League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${akira.variable} ${nunito.className} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
