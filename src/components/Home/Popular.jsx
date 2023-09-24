import PYBlob from '@/assets/courses/python/intro/wJoin.svg';
import JSBlob from '@/assets/JSBlob.svg';
import HTMLBlob from '@/assets/HTMLBlob.svg';
import ComingSoon from '@/assets/ComingSoon.svg';
import Image from 'next/image';
import Link from 'next/link';

function Card({ name, desc, blob, centered }) {
	return (
		<div
			className={`w-full rounded-xl bg-neutral-50 pb-2 drop-shadow-xl mx-auto${
				centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : ''
			}`}>
			<Link className="relative flex" href="/courses/intro-python">
				<Image
					src={blob}
					className="h-full w-full select-none rounded-2xl"
					alt={name}
				/>
			</Link>
			<div className="mx-auto max-w-[95%] flex-col py-6 text-center">
				<h1 className="text-4xl font-semibold">{name}</h1>
				<p className="pt-2 text-lg font-normal">{desc}</p>
			</div>
		</div>
	);
}

export default function Popular() {
	return (
		<section className="mb-10 mt-20 h-full w-full">
			<h1 className="text-center text-5xl font-bold">Popular Courses</h1>
			<div className="3xl:gap-x-16 mx-auto flex w-full max-w-[80%] flex-col gap-y-10 pt-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:flex xl:flex-row 2xl:gap-x-14">
				<Card
					name="Coming Soon"
					desc="This course is coming soon, stay tuned!"
					blob={ComingSoon}
				/>
				<Card
					name="Intro to Python"
					desc="Python course for complete beginners to programming, no coding experience required."
					blob={PYBlob}
				/>
				<Card
					name="Coming Soon"
					desc="This course is coming soon, stay tuned!"
					blob={ComingSoon}
					centered
				/>
			</div>
		</section>
	);
}
