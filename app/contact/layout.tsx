import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ascend Tech Agency",
  description:
    "Get in touch with Ascend Tech Agency. Let's discuss your project and how we can help bring your vision to life.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
