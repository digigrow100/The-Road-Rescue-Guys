import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCallBar from '../components/MobileCallBar';

export const metadata: Metadata = {
  title: 'The Road Rescue Guys | 24/7 UK Vehicle Recovery & Roadside Assistance',
  description:
    'Professional vehicle recovery, roadside assistance and towing across Birmingham and the UK. 24/7 dispatch, transparent pricing, average 25 minute ETA.',
  icons: {
    icon: '/favicon.svg',
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
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        <Header />
        <main className="w-full pt-28 pb-20 lg:pb-0 bg-surface">
          <div className="flex flex-col w-full">{children}</div>
        </main>
        <MobileCallBar />
        <Footer />
      </body>
    </html>
  );
}
