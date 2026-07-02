import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Al Nasir Construction Company | Building Pakistan, Brick by Brick",
  description:
    "Al Nasir Construction Company — residential, commercial and structural construction across Punjab. 25+ years of building trust, delivered on schedule and on spec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={
          {
            "--font-display":
              "'Arial Narrow', 'Oswald', 'Helvetica Neue Condensed', Impact, sans-serif",
            "--font-body":
              "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            "--font-data": "'Consolas', 'SF Mono', Menlo, monospace",
          } as React.CSSProperties
        }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
