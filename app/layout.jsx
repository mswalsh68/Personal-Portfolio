import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://mikewalsh.dev';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mike Walsh — Full-Stack Developer',
    template: '%s · Mike Walsh',
  },
  description:
    'Portfolio of Mike Walsh — full-stack developer. Projects, resume, live sports scoreboards, and a way to get in touch.',
  openGraph: {
    title: 'Mike Walsh — Full-Stack Developer',
    description:
      'Projects, resume, live sports scoreboards, and a way to get in touch.',
    url: siteUrl,
    siteName: 'Mike Walsh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Walsh — Full-Stack Developer',
    description: 'Full-stack developer portfolio.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
