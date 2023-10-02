import Image from 'next/image';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { TbCodeCircle2, TbBooks } from 'react-icons/tb';
import Timeline from './Timeline';

export default function Overview({
	title,
	shortDescription,
	description,
	duration,
	assignments,
	topics,
	image,
	imageAlt,
	button,
	skills,
}) {
	button +=
		' text-bold rounded-lg w-full w-2/5 mb-8 lg:mb-0 text-4xl row-start-3';
	return (
		<section className="3xl:max-w-[55%] mx-auto flex max-w-[90%] flex-col justify-center gap-y-10 py-4 lg:pt-10 xl:max-w-[75%]">
			<div className="col-span-2 w-full grid-cols-[55%,40%] flex-col gap-x-[4.75%] xl:grid">
				<div className="justify-between xl:grid xl:grid-rows-[65%,10%,25%]">
					<div className="flex h-full flex-col">
						<h1 className="pb-2 text-4xl font-bold">{title}</h1>
						<div className="justify-auto mx-auto grid w-full grid-cols-2 text-xl lg:mx-0 lg:flex lg:flex-row lg:gap-x-6">
							<span className="flex flex-row items-center gap-x-2 lg:justify-center">
								<HiOutlineVideoCamera />
								{duration}
							</span>
							<span className="flex flex-row items-center gap-x-2 lg:justify-center">
								<TbCodeCircle2 />
								{assignments}
							</span>
							<span className="flex flex-row items-center gap-x-2 lg:justify-center">
								<TbBooks />
								{topics}
							</span>
						</div>
						<Image
							src={image}
							alt={imageAlt}
							className="mx-auto h-auto w-full pt-4 drop-shadow-sm lg:mx-0 lg:hidden lg:w-0 lg:pt-0"
						/>
						<p className="py-6 text-xl lg:py-4">{shortDescription}</p>
					</div>
					<button className={button}>Enroll</button>
				</div>
				<Image
					src={image}
					alt={imageAlt}
					className="hidden h-auto w-full self-center justify-self-end drop-shadow-sm lg:inline"
				/>
			</div>
			{/* horizontal grid of skill level, reqreqs, time to complete, and price. Add icons, and add borders to seperate the parts of the grid */}
			<div className="flex flex-col gap-x-[4.75%] gap-y-10 lg:grid lg:grid-cols-[55%,40%]">
				<div className="mx-auto flex flex-col gap-y-2 lg:mx-0">
					<h1 className="text-center text-3xl font-semibold lg:text-left 2xl:text-4xl">
						About This Course
					</h1>
					<p className="text-xl">{description}</p>
				</div>
				<div className="mx-auto flex w-full flex-col gap-y-2">
					<h1 className="text-3xl font-semibold lg:mx-0 2xl:text-4xl">
						Skills Covered
					</h1>
					<div className="grid grid-cols-[10%,90%] justify-center gap-x-2 gap-y-2 text-xl font-semibold">
						{skills}
					</div>
				</div>
			</div>

			<Timeline />
		</section>
	);
}
