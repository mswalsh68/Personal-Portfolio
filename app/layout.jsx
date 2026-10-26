import './globals.css';
import './mw.css';
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Redesign typefaces — mapped to --display / --body / --mono in mw.css
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://personal-portfolio-gamma-peach.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mike Walsh — Product Manager',
    template: '%s · Mike Walsh',
  },
  description:
    'Portfolio of Mike Walsh — product manager who builds his own products with Next.js. Projects, resume, live sports scoreboards, and a way to get in touch.',
  openGraph: {
    title: 'Mike Walsh — Product Manager',
    description:
      'Product manager who builds his own products with Next.js. Projects, resume, live demos, and a way to get in touch.',
    url: siteUrl,
    siteName: 'Mike Walsh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Walsh — Product Manager',
    description: 'Product manager who builds his own products with Next.js.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="mw">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
