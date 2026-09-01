import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solutions.sanchez.ph"),
  title: "Sanchez Solutions | Enterprise Software Suites",
  description: "High-performance software systems designed for robust operations. Featuring TRACE, EquiYield, CCARD Studio, DPA Mastery, SILIP, and Vault Drop Explorer.",
  keywords: ["software solutions", "asset tracking", "RFID asset tracking", "hospitality software", "cooperative savings software", "coop loan manager", "on-premises systems", "Philippines software developer", "data privacy", "cloud storage"],
  authors: [{ name: "Alfredo Sanchez Jr." }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Sanchez Solutions | Enterprise Software Suites",
    description: "Robust on-premises and web applications built for business compliance, operations, and financial auditing.",
    url: "https://solutions.sanchez.ph",
    siteName: "Sanchez Solutions",
    images: [
      {
        url: "/solutions-logo.png",
        width: 1024,
        height: 1024,
        alt: "Sanchez Solutions Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] font-sans antialiased text-gray-200">
        {children}
      </body>
    </html>
  );
}

