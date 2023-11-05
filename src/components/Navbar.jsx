'use client';
import Link from 'next/link';
import toast from 'react-hot-toast';
import ThemeButton from './ThemeButton';

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-10 hidden w-full justify-between border-b-[1.5px] border-neutral-300/50 bg-neutral-100/10 py-3 backdrop-blur-lg backdrop-filter dark:border-neutral-600/50 dark:bg-neutral-800/10 md:flex">
			<div className="mx-auto flex h-16 min-w-[90%] items-center justify-between px-4">
				<Link
					href="/"
					passHref
					className="font-quicksand text-brand/90 flex items-center text-center text-4xl font-bold">
					ElitLabs
				</Link>
				<div className="flex items-center justify-center space-x-8 text-2xl font-semibold">
					<ThemeButton />
					<Link
						className="transition-all duration-300 hover:text-neutral-700 hover:dark:text-neutral-200"
						href="/about">
						About
					</Link>
					<Link
						className="transition-all duration-300 hover:text-neutral-700 hover:dark:text-neutral-200"
						href="/contact">
						Contact
					</Link>
					<button
						className="rounded-xl bg-gradient-to-tl from-violet-400 to-blue-400 p-2 px-5 text-neutral-800 drop-shadow-md transition duration-500 ease-in-out hover:scale-105 hover:text-neutral-700 dark:from-violet-500 dark:to-blue-500 dark:text-neutral-200 hover:dark:text-neutral-300"
						onClick={() => toast.error('Coming Soon!')}>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}
