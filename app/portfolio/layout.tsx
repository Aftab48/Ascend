import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Ascend Tech Agency",
  description:
    "Explore our portfolio of successful web development, mobile app, and custom software projects. See how we've helped businesses achieve their digital goals.",
  icons: {
    icon: "/assets/header-logo.ico",
    apple: "/assets/header-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div> {children}</div>;
}
