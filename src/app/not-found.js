import Link from 'next/link';

export const metadata = {
	title: 'ElitLabs | 404',
};

export default function Err404() {
	return (
		<main>
			<div className="flex h-[70vh] flex-col items-center justify-center py-2">
				<main className="flex h-full flex-col items-center justify-center gap-y-8 px-20 text-center">
					<h1 className="flex flex-col gap-y-3 text-6xl font-bold">
						<span className="bg-500% animate-gradient text-gradient bg-gradient-to-l from-violet-500 via-blue-500 to-violet-500 font-black">
							404
						</span>
						Page Not Found
					</h1>

					<Link
						href="/"
						className="animate-gradient bg-500% mt-3 rounded-md bg-gradient-to-l from-violet-500 via-blue-500 to-violet-500 px-6 py-4 text-3xl font-bold text-white transition hover:scale-105">
						Back to Home
					</Link>
				</main>
			</div>
		</main>
	);
}
