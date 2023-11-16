import { PiBooksFill } from 'react-icons/pi';
import { BsBraces } from 'react-icons/bs';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

function Card({ title, text, icon }) {
	return (
		<div className="flex h-auto flex-col items-center rounded-2xl border-t-4 border-brand bg-neutral-50 p-2 pb-10 drop-shadow-[7.5px_5px_10px_rgba(232,46,81,0.15)] dark:bg-neutral-900 dark:drop-shadow-[7.5px_5px_15px_rgba(232,46,81,0.35)] 2xl:pb-8 4xl:pb-12">
			<div className="flex max-w-[85%] flex-col gap-y-4 pt-8">
				<span className="flex w-max rounded-full bg-brand">{icon}</span>
				<h3 className="text-3xl font-bold 4xl:text-4xl">{title}</h3>
				<p className="xl:text-xl 4xl:text-2xl">{text}</p>
			</div>
		</div>
	);
}
export default function Why() {
	return (
		<section className="flex h-max flex-col gap-y-11 py-10 pb-12 xl:max-w-[80%]">
			<h1 className="VHcenter flex text-center text-[2.5rem] font-bold leading-[1] 2xl:text-5xl 4xl:text-6xl">
				Why choose our courses?
			</h1>
			<section className="VHcenter flex flex-row gap-x-16">
				<div className="flex max-w-[80%] flex-col justify-between gap-x-16 gap-y-10 md:max-w-[75%] md:flex-row xl:max-w-[85%] 4xl:max-w-[100%]">
					<div className="flex flex-col gap-y-10 md:max-w-[45%] md:gap-y-20">
						<Card
							title="Skilled Teachers"
							text="Our courses are led by a team of highly skilled instructors who are not only experts in coding but also passionate about teaching. They bring a lot of experience to the table, ensuring that you receive the best education and guidance throughout your learning journey."
							icon={
								<BsBraces className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
							}
						/>
						<Card
							title="Comprehensive Learning Resources"
							text="Our courses provide a diverse range of learning materials for aspiring programmers. With our on-demand courses, you'll have access to detailed videos, quizzes, and projects to help you have real world programming experience. Our resources are designed to accommodate different learning styles, ensuring you have the essential tools to excel in your coding studies."
							icon={
								<PiBooksFill className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
							}
						/>
					</div>
					<div className="flex flex-col gap-y-10 md:max-w-[45%] md:gap-y-20 md:pt-10">
						<Card
							title="Easy to Learn"
							text="We understand that coding can seem difficult, especially for beginners. That's why our courses are designed to make learning as straightforward as possible. Our coding materials, comprehensive notes, and instructional videos break down complex concepts into easy-to-understand modules, making it accessible and enjoyable for learners of all levels."
							icon={
								<FaGraduationCap className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
							}
						/>
						<Card
							title="Practice by Doing"
							text="We believe in the power of learning through hands-on experience. Our courses place a strong emphasis on practical coding exercises and real-world projects. You'll have the opportunity to apply your knowledge immediately, honing your coding skills and problem-solving abilities."
							icon={
								<FaLaptopCode className="h-auto w-auto max-w-[2.75rem] rounded-full stroke-[0.75] p-2 text-[3rem] text-white 2xl:max-w-[3.5rem] 4xl:max-w-[5rem]" />
							}
						/>
					</div>
				</div>
			</section>
		</section>
	);
}
