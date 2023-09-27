import Image from 'next/image';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { TbCodeCircle2, TbBooks } from 'react-icons/tb';
import Table from '@/components/Course/Overview/Table';

export default function Overview({
	title,
	description,
	duration,
	assignments,
	topics,
	image,
	button,
	video,
}) {
	return (
		<section className="mx-auto grid h-fit max-w-[90%] grid-cols-2 grid-rows-2 justify-center gap-y-10">
			<div className="flex w-max max-w-[100%] flex-col justify-center gap-y-2">
				<h1 className="text-4xl font-bold">{title}</h1>
				<div className="flex flex-row justify-between gap-x-6">
					<span className="flex flex-row items-center justify-center gap-x-2">
						<HiOutlineVideoCamera />
						2h 14m
					</span>
					<span className="flex flex-row items-center justify-center gap-x-2">
						<TbCodeCircle2 /> 3 Assignments
					</span>
					<span className="flex flex-row items-center justify-center gap-x-2">
						<TbBooks />6 Topics
					</span>
				</div>
				<Image src={image} className="drop-shadow-sm" />
				{button}
			</div>
			<div className="mx-auto flex aspect-video h-auto w-full max-w-[85%] items-center justify-center self-center rounded-xl bg-neutral-400">
				{video}
			</div>
			<div className="flex max-w-[75%] flex-col gap-y-2">
				<h1 className="text-3xl font-semibold">About This Course</h1>
				<p>{description}</p>
			</div>
			<div className="mx-auto flex max-w-[75%] flex-col gap-y-2">
				<h1 className="text-3xl font-semibold">Skills in this course</h1>
				<ul>
					<li>Python</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
				</ul>
			</div>
		</section>
	);
}
