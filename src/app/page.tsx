import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Your Website Name',
    template: '%s - Your Website Name', // Allows page-specific titles
  },
  description: 'Welcome to our website. We offer amazing services for your business.',
  openGraph: {
    title: 'Your Website Name',
    description: 'Discover what we do and how we can help you!',
    url: 'https://yourwebsite.com',
    siteName: 'Your Website Name',
    images: [
      {
        url: '/images/default-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Default Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function HomePage() {
  return (
    <>
      <div className="">
        <h1>Welcome to Your Company!</h1>
        <p>We offer exceptional services to help your business grow.</p>
        <Link href="/home">Home</Link>
      </div>
    </>
  );
}
