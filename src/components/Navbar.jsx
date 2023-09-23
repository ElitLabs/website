'use client';
import Link from 'next/link'; // Import Link from 'next/link'
import toast from 'react-hot-toast';

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-10 hidden w-full justify-between border-b-[1.5px] border-neutral-300/50 bg-neutral-100 bg-opacity-10 py-3 backdrop-blur-lg backdrop-filter md:flex">
			<div className="mx-auto flex h-16 min-w-[90%] items-center justify-between px-4">
				<Link
					href="/"
					passHref
					className="font-quicksand text-brand/90 flex items-center text-center text-4xl font-bold">
					ElitLabs
				</Link>
				<div className="flex items-center justify-center space-x-8 text-2xl font-semibold text-neutral-900">
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
					<button
						className="rounded-xl bg-gradient-to-tl from-violet-400 to-blue-400 p-2 px-5 drop-shadow-md transition duration-500 ease-in-out hover:scale-105"
						onClick={() => toast.error('Coming Soon!')}>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}
