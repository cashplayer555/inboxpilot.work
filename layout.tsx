import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InboxPilot | AI Email Assistant",
  description:
    "InboxPilot helps small businesses draft email replies, tag hot leads, and follow up faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}