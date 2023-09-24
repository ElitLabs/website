import Link from 'next/link';

export default function ComingSoonPage() {
	return (
		<div className="flex h-[70vh] flex-col items-center justify-center py-2">
			<main className="flex h-full flex-col items-center justify-center px-20 text-center">
				<h1 className="text-6xl font-bold">Coming Soon</h1>

				<span className="flex flex-row items-center justify-center gap-x-6 ">
					<p className="mt-3 text-2xl">Our website is under construction.</p>
					<Link
						href="/"
						className="mt-3 rounded-md bg-blue-500 px-5 py-3 text-2xl font-bold text-white hover:bg-blue-700">
						Back to Home
					</Link>
				</span>
			</main>
		</div>
	);
}
