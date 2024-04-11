import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import { Wrapper } from "@/components";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathius Kormasela",
  description: "Mathius's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={rubik.className} 
        suppressHydrationWarning={true}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
