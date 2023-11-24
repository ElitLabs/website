'use client';

import PYBlob from '@/assets/courses/python/intro/wJoin.svg';
import JSBlob from '@/assets/JSBlob.svg';
import HTMLBlob from '@/assets/HTMLBlob.svg';
import ComingSoon from '@/assets/ComingSoon.svg';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

function Card({
	name,
	desc,
	blob,
	url = '#popular',
	centered,
	comingSoonToast,
}) {
	return (
		<div
			className={`w-full rounded-xl bg-neutral-50 drop-shadow-xl dark:bg-neutral-950 dark:drop-shadow-[2.5px_7.5px_5px_rgba(155,155,155,0.15)] mx-auto${
				centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : ''
			}`}>
			{!comingSoonToast ? (
				<Link className="relative flex" href={url}>
					<Image
						src={blob}
						className="h-full w-full select-none rounded-2xl"
						alt={name}
					/>
				</Link>
			) : (
				<div
					className="relative flex cursor-pointer"
					onClick={() => {
						comingSoonToast &&
							toast.error(
								'We are currently working on new courses, check back soon!',
							);
					}}>
					<Image
						src={blob}
						className="h-full w-full select-none rounded-2xl"
						alt={name}
					/>
				</div>
			)}
			<div className="mx-auto max-w-[95%] flex-col py-6 text-center">
				<h1 className="text-4xl font-semibold">{name}</h1>
				<p className="pt-2 text-lg font-normal">{desc}</p>
			</div>
		</div>
	);
}
export default function Popular() {
	return (
		<section
			className="lg:pt-18 mb-10 h-full w-full pt-24 xl:w-[115%] 4xl:w-full"
			id="popular">
			<h1 className="text-center text-[2.5rem] font-bold 2xl:text-5xl 4xl:text-6xl">
				On-Demand Courses
			</h1>
			<div className="mx-auto flex w-full flex-col gap-y-10 pt-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:flex xl:flex-row 2xl:gap-x-14 3xl:gap-x-16">
				<Card
					name="Java"
					desc="This course is coming soon, stay tuned!"
					blob={ComingSoon}
					comingSoonToast
				/>
				<Card
					name="Python"
					desc="This course is coming soon, stay tuned!"
					blob={ComingSoon}
					// url="/courses/python/intro"
					comingSoonToast
				/>
				<Card
					name="Web Dev"
					desc="This course is coming soon, stay tuned!"
					blob={ComingSoon}
					centered
					comingSoonToast
				/>
			</div>
		</section>
	);
}
