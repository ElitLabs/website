import Link from 'next/link';

export const metadata = {
	title: 'ElitLabs | About',
};

export default function About() {
	return (
		<div className="mx-auto flex w-full flex-col items-center justify-center py-10 lg:max-w-[70%]">
			<div className="flex flex-col items-center justify-center gap-y-[1vh] pt-4 lg:pt-[7.5vh] 3xl:pt-[10vh]">
				<header className="flex w-full max-w-[90%] flex-col items-center justify-center lg:max-w-[70%]">
					<h1 className="text-gradient animate-sgradient bg-gradient-to-l from-green-600 via-blue-600 to-green-600 bg-500% text-center font-mono text-[3rem] font-black uppercase tracking-wide dark:from-green-500 dark:via-blue-500 dark:to-green-500 lg:text-[3.125rem]">
						Course Description
					</h1>
				</header>
				<div className="max-w-[90%] lg:max-w-[85%]">
					<p className="text-left font-medium 3xl:text-2xl">
						Led by Nilia Liu, a dedicated biotech student, 
						ElitLabs Biotechnology is an innovative course designed by experienced students
						and tutors that are passionate about biology and the latest cutting edge 
						techniques that are being used to improve our understanding of life. 
						This course teaches the foundations of biological sciences, along with 
						fundamental lab techniques and equipment being used in labs today. 
						<br/><br/>
						Course material will be taught at the high school level, but broken down 
						into simpler terms so that everyone can understand! In addition to 
						learning about the fundamentals of life, and designing experiments, 
						students will also be able to learn about some of the latest technology 
						that are being used in labs today. 
					</p>
				</div>
				<div className="mx-auto flex w-[25%] max-w-[25%] justify-between text-center text-2xl font-semibold text-neutral-50 lg:mx-0 lg:max-w-full mt-[2vh]">
					<Link
						href={'../student-signup'}
						className="mx-auto w-full self-center rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-blue-500 bg-200% p-4 transition duration-500 ease-in-out hover:scale-105 hover:animate-gradient sm:mx-0 lg:self-start">
						Join Now!
					</Link>
				</div>
			</div>
		</div>
	);
}

