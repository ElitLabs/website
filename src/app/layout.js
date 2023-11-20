import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
	title: 'ElitLabs',
	description: 'ElitLabs',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
			suppressHydrationWarning>
			<head>
				<meta name="description" content={metadata.description} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className="flex h-screen min-w-full max-w-full flex-col overflow-x-hidden scroll-smooth bg-neutral-50 font-sans dark:bg-neutral-950">
				<Providers>
					<Toaster />
					<Navbar />
					<MobileNav />
					<main className="mb-auto">{children}</main>
					<Footer />
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
