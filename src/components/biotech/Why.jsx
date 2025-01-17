import { BiDna } from 'react-icons/bi';
import { FaGraduationCap} from 'react-icons/fa';

function Card({ title, text, icon }) {
	return (
		<div className="flex h-auto w-[50%] flex-col items-center rounded-2xl border-t-4 border-bioBrand bg-neutral-50 p-2 pb-10 drop-shadow-[7.5px_5px_10px_rgba(46,232,81,0.25)] dark:bg-neutral-950 dark:drop-shadow-[7.5px_5px_15px_rgba(46,232,81,0.35)] 2xl:pb-8 4xl:pb-12">
			<div className="flex max-w-[85%] flex-col gap-y-4 pt-8">
				<span className="flex w-max rounded-full bg-bioBrand">{icon}</span>
				<h1 className="text-3xl font-bold 4xl:text-4xl">{title}</h1>
				<p className="xl:text-xl 4xl:text-2xl">{text}</p>
			</div>
		</div>
	);
}
export default function Why() {
	return (
		<section className="flex h-max flex-col gap-y-11 py-10 pb-12 xl:w-[105%] 3xl:w-full">
			<h1 className="VHcenter flex text-center text-[2.5rem] font-bold leading-[1] 2xl:text-5xl 4xl:text-6xl">
				Why choose our courses?
			</h1>
			<section>
				<div className="flex mx-[5%] flex-row gap-x-5 lg:gap-x-10 max-h-[45%] grid-cols-[50%,50%]">
					<Card
						title="Skilled Teachers"
						text="Our courses are led by a team of highly skilled instructors who are not only experts in biotech but also passionate about teaching. They bring a lot of experience to the table, ensuring that you receive the best education and guidance throughout your learning journey."
						icon={
							<BiDna className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
						}
					/>
					<Card
						title="Easy to Learn"
						text="We understand that biotech can seem difficult, especially for beginners. That's why our courses are designed to make learning as straightforward as possible. Our lessons break down complex concepts into easy-to-understand ideas, making it accessible and enjoyable for learners of all levels."
						icon={
							<FaGraduationCap className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
						}
					/>
				</div>
			</section>
		</section>
	);
}
