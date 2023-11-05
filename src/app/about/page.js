export const metadata = {
	title: 'ElitLabs | About',
};

export default function About() {
	return (
		<div className="mx-auto flex w-full max-w-[70%] flex-col items-center py-8">
			<h1 className="pb-4 text-6xl font-bold">About ElitLabs</h1>
			<div className="flex flex-row">
				<p className="flex flex-col gap-y-2 text-xl font-normal">
					Hey! We&apos;re ElitLabs, a small group of friends who came together
					to create a platform for learning and teaching.
					<span>
						As students ourselves, we know how hard it can be to learn using the
						current courses out there. In our own experiences, we noticed that
						we learn by doing, and not by listening.
					</span>
					That&apos;s why we created ElitLabs, a platform to help others learn
					intuitively.
				</p>
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
		</div>
	);
}
