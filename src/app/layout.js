import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
	title: 'ElitLabs',
	description: 'ElitLabs',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className="flex h-screen min-w-full max-w-full flex-col overflow-x-hidden bg-neutral-50 2xl:max-w-[90%]">
				<Toaster />
				<Navbar />
				<MobileNav />
				<main className="mb-auto">{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
