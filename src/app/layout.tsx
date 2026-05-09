import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sohantalukder.github.io";
const thumbnailUrl = `${siteUrl}/thumbnail.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Md. Siam Parvez | React  Developer | Web Developer Bangladesh",
    template: "%s | Siam Parvez",
  },
  description:
    "Md. Siam Parvez (Siam Parvez) is a React  developer based in Dhaka, Bangladesh. Portfolio of  web  Developer Bangladesh.",
  applicationName: "Siam Parvez Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Md. Siam Parvez",
    
    "Siam Parvez React  Developer",
    
    
    "React Developer Bangladesh",
    
    "Full Stack Developer",
    
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "Bangladesh Developer",
    "Dhaka Developer",
    "Portfolio",
    
    "Node.js",
    
  ],
  authors: [{ name: "Siam Parvez", url: siteUrl }],
  creator: "Siam Parvez",
  publisher: "Siam Parvez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sohan Talukder Portfolio",
    title:
      "Md. Siam Parvez | React  Developer | Web Developer Bangladesh",
    description:
      "React developer in Dhaka, Bangladesh. Md.Siam Parvez builds web application projects, and contact.",
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: "Md. Siam Parvez — React  developer, Bangladesh",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siamparvez01",
    creator: "@siamparvez01",
    title:
      "Md. Siam Parvez | React Native & Flutter Developer |  Web Developer Bangladesh",
    description:
      "React developer in Dhaka, Bangladesh. ",
    images: [thumbnailUrl],
  },
  verification: {
    google: "hTWXbF_598kgXibWYI9PbGiTV07irnhJlxX1Ukg0S1M",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "theme-color": "#ffb80d",
    "color-scheme": "light dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Siam Portfolio",
    "application-name": "Siam Parvez Portfolio",
    "msapplication-TileColor": "#ffb80d",
    "msapplication-config": "browserconfig.xml",
    "twitter:image": thumbnailUrl,
    "twitter:image:alt": "Md. Siam Parvez — React  developer, Bangladesh",
    "og:image:alt": "Md. Siam Parvez — React developer, Bangladesh",
    "article:author": "Md. Siam Parvez",
    "profile:first_name": "Siam",
    "profile:last_name": "Parvez",
    "profile:username": "siamparvez",
    "profile:gender": "male",
    "geo.region": "BD-13",
    "geo.position": "23.8103;90.4125",
    "geo.placename": "Dhaka, Bangladesh",
    "ICBM": "23.8103, 90.4125",
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
