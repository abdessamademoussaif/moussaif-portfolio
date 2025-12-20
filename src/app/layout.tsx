import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {
  title: 'Moussaif | Developer Portfolio',
  description:
    'Portfolio website of Moussaif: Backend Developer.',
  openGraph: {
    title: 'Moussaif | Developer Portfolio',
    description:
      'Portfolio website of Moussaif: Backend Developer.',
    url: 'https://moussaif.online/',
    siteName: 'Moussaif',
    images: [
      {
        url: 'https://moussaif.online/images/about.png',
        width: 1200,
        height: 630,
        alt: 'Moussaif Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moussaif | Developer Portfolio',
    description:
      'Portfolio website of Moussaif: Backend Developer.',
    images: ['https://moussaif.online/images/about.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Moussaif',
              url: 'https://moussaif.online/',
              image: 'https://moussaif.online/images/about.png',
              jobTitle: 'Web Developer, Designer, Creator',
              sameAs: [
                'https://github.com/abdessamademoussaif',
                'https://www.linkedin.com/in/abdessamade-moussaif-859079350',
                'https://instagram.com/abdessamade.moussaif',
              ],
              description:
                'Portfolio website of Moussaif: Backend Developer.',
            }),
          }}
        />
      </head>
      <body className={`${ibmPlexSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
