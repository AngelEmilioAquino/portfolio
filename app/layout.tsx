import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angel Aquino Portfolio",
  description: "Portfolio de Angel E. Aquino – Full Stack, DevOps Developer, UX/UI & Web 3D Specialist",
  icons: {
    icon: "/logoNew.png",
  },
  metadataBase: new URL("https://angelaquino.vercel.app"),
  openGraph: {
    title: "Angel Aquino Portfolio",
    description: "Portfolio de Angel E. Aquino – Full Stack, DevOps Developer, UX/UI & Web 3D Specialist",
    url: "https://angelaquino.vercel.app",
    siteName: "Angel Aquino Portfolio",
    images: [
      {
        url: "/logoNew.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Aquino Portfolio",
    description: "Portfolio de Angel E. Aquino – Full Stack, DevOps Developer, UX/UI & Web 3D Specialist",
    images: ["/logoNew.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logoNew.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logoNew.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logoNew.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}