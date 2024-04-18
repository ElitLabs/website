import CallToAction from '@/components/biotech/CTA';
import Why from '@/components/biotech/Why';

export const metadata = {
	title: 'ElitLabs | Biotech',
};

export default function Biotech() {

	return (
		<div className="mx-auto flex w-full flex-col items-center justify-center py-10 lg:max-w-[70%]">
			<CallToAction />
			<section className="flex flex-col items-center">
				<section className="lg:pt-18 mb-10 h-full w-full pt-24 xl:w-[115%] 4xl:w-full">
					<h1 className="text-center text-[2.5rem] font-bold 2xl:text-5xl 4xl:text-6xl">
						Our Mission
					</h1>
					<div className="max-w-[80%] lg:max-w-[85%] mx-auto mt-[2vh]">
						<p className="text-left font-medium 3xl:text-2xl ">
							Our mission is to spark the curiosity of young minds and inspire them to explore 
							the wonders of life sciences. Our comprehensive biotech course goes beyond 
							teaching fundamentals; it cultivates a love for STEM and engineering, 
							particularly among those who may feel less confident in these fields.
							<br/><br/>
							Our goal is to empower students with knowledge and confidence, 
							fostering a deeper understanding of the world around them. 
							Whether you&apos;re a beginner or advanced learner, anyone is welcome to join us and learn.
							<br/><br/>
							Welcome to ElitLabs Biotech, where a passion for science ignites learning!
						</p>
					</div>
				</section>
			</section>
			<Why />
		</div>
	);
}
