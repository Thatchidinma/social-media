import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/SideBar/SideBar";
import { Providers } from "./Provider";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata  = {
  title: "Social Media Feed Page",
  description: "Browse the latest curated posts on our dynamic feed.",
  openGraph: {
    title: "Dynamic Feed",
    description: "Stay updated with trending posts and categories.",
    url: "https://social-media-thatchidinmas-projects.vercel.app/",
    siteName: "Social Media",
    locale: "en_US",
    type: "website",
  },
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex w-full h-screen overflow-hidden">
            <Sidebar />
            <section className="flex-1">
              <NavBar />
              {children}
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
