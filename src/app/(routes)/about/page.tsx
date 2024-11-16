import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Check out the amazing projects we’ve worked on.',
  openGraph: {
    title: 'Projects - Your Website Name',
    description: 'Check out the amazing projects we’ve worked on.',
    url: 'https://yourwebsite.com/projects',
    images: [
      {
        url: '/images/projects-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Your Website Name',
    description: 'Check out the amazing projects we’ve worked on.',
    images: ['/images/projects-twitter-image.jpg'],
  },
};

export default function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Welcome to our company. This is the about page.</p>
      </div>
    );
  }
  