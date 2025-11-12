import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SavedJobsProvider } from "@/context/SavedJobsContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
import QuillStyles from "./QuillStyles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const times_raleway = localFont({
  src: "./../fonts/Raleway-VariableFont_wght.ttf",
  variable: "--times-new-roman",
  weight: "100 400",
});
const times_raleway_bold = localFont({
  src: "./../fonts/Raleway-VariableFont_wght.ttf",
  variable: "--times-new-roman-bold",
  weight: "500 900",
});

export const metadata: Metadata = {
  title: "Trusted Nurse Staffing | C.E.N.M. Healthcare",
  description:
    "C.E.N.M. Healthcare connects nurse managers and directors with reliable, professional travel nurses, CNAs, and LVNs across Southern California. High performance, no drama.",
  keywords: [
    "cenm",
    "CENM",
    "cenmhealthcare",
    "CENM Healthcare",
    "nurse staffing",
    "healthcare staffing California",
    "travel nurses",
    "CNA jobs",
    "LVN hiring",
    "Southern California nurses",
    "reliable nurse staffing",
  ],
  robots: "index, follow",
  authors: [{ name: "CENM Healthcare", url: "https://cenmhealthcare.com" }],
  applicationName: "CENM Healthcare",
  generator: "Next.js",
  metadataBase: new URL("https://cenmhealthcare.com"),
  openGraph: {
    title: "CENM Healthcare | Trusted Nurse Staffing",
    description:
      "Reliable, drama-free travel nurses, CNAs, and LVNs for Nurse Managers and DONs in Southern California.",
    url: "https://cenmhealthcare.com",
    siteName: "CENM Healthcare",
    images: [
      {
        url: "https://api.cenmhealthcare.com/images/12b2a2a6-1518-4e20-a3df-80d78b3f8277.svg",
        width: 1200,
        height: 630,
        alt: "CENM Healthcare - Trusted Nurse Staffing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CENM Healthcare | Trusted Nurse Staffing",
    description:
      "Find travel nurses, CNAs, and LVNs ready to support your team with reliability and performance.",
    images: [
      "https://api.cenmhealthcare.com/images/12b2a2a6-1518-4e20-a3df-80d78b3f8277.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QuillStyles />
      <body
        className={`${geistMono.variable} ${geistSans.variable} ${times_raleway.className} ${times_raleway_bold.variable} antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SavedJobsProvider>
          <StoreProvider>
            <AntdRegistry>
              <Suspense>
                <Navbar />
                <div className="  md:min-h-[calc(100vh-180px)]">{children}</div>
                <Footer />
              </Suspense>
            </AntdRegistry>
          </StoreProvider>
        </SavedJobsProvider>
      </body>
    </html>
  );
}
