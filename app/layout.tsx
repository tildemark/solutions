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
  title: "Sanchez Solutions | Enterprise Software Suites",
  description: "High-performance software systems designed for robust operations. Featuring TRACE Asset Management and EquiYield Savings & Loan platform.",
  keywords: ["software solutions", "asset tracking", "RFID asset tracking", "hospitality software", "cooperative savings software", "coop loan manager", "on-premises systems", "Philippines software developer", "data privacy"],
  authors: [{ name: "Alfredo Sanchez Jr." }],
  openGraph: {
    title: "Sanchez Solutions | Enterprise Software Suites",
    description: "Robust on-premises and web applications built for business compliance, operations, and financial auditing.",
    url: "https://solutions.sanchez.ph",
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

