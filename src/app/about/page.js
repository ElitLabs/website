export const metadata = {
	title: 'ElitLabs | About',
};

export default function About() {
	return (
		<div className="mx-auto flex w-full max-w-[70%] flex-col items-center py-8">
			<h1 className="pb-4 text-6xl font-bold">About ElitLabs</h1>
			<div className="flex flex-row">
				<p className="gap-y-2 text-xl font-normal"></p>
			</div>
			<div>
				<h2 className="text-4xl font-bold">Our Mission</h2>
				<p className="flex flex-col gap-y-2 text-xl font-normal"></p>
			</div>
			<div>
				<h2 className="text-4xl font-bold">Our Team</h2>
				<p className="flex flex-col gap-y-2 text-xl font-normal"></p>
				<p className="flex flex-col gap-y-2 text-xl font-normal">
					We are currently looking for skilled web developers and tutors! If
					you&apos;re interested in joining our team, please email us at{' '}
					<a href="mailto:team@elitlabs.com>">team@elitlabs.com</a>.
				</p>
			</div>
			<div>
				<h2 className="text-4xl font-bold">Our Story</h2>
			</div>
			<div id="contact">
				<h2 className="text-4xl font-bold">Contact</h2>
			</div>
		</div>
	);
}
