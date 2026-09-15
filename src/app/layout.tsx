import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallBar from '../components/MobileCallBar';

const title = 'The Road Rescue Guys | 24/7 UK Vehicle Recovery & Roadside Assistance';
const description =
  'Professional vehicle recovery, roadside assistance and towing across Greater Manchester, Yorkshire and the UK. 24/7 dispatch, transparent pricing, average 25 minute ETA.';

export const metadata: Metadata = {
  metadataBase: new URL('https://theroadrescueguys.co.uk'),
  title,
  description,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    url: 'https://theroadrescueguys.co.uk',
    siteName: 'The Road Rescue Guys',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#b7102a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,400;0,700;0,800;0,900;1,700&family=JetBrains+Mono:wght@600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Best-guess header height so content isn't tucked under the fixed
            header before Header.tsx measures the real height on hydration —
            avoids a layout flash on first paint. Header.tsx's ResizeObserver
            is the source of truth; this is only a same-breakpoint estimate. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=window.innerWidth;var h=w<768?170:w<1024?146:118;document.documentElement.style.setProperty('--header-height',h+'px');})();`,
          }}
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        <Header />
        <main className="w-full pt-[var(--header-height,7rem)] pb-20 lg:pb-0 bg-surface">
          <div className="flex flex-col w-full">{children}</div>
        </main>
        <MobileCallBar />
        <Footer />
      </body>
    </html>
  );
}
