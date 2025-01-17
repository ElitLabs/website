import CallToAction from '@/components/Home/CTA';
import Popular from '@/components/Home/Popular';
import Why from '@/components/Home/Why';

export const metadata = {
	title: 'ElitLabs | Home',
};

export default function Home() {
	return (
		<main className="mx-auto max-w-[90%] xl:max-w-[75%] 3xl:max-w-[60%]">
			<header>
				<CallToAction />
			</header>
			<section className="flex flex-col items-center">
				<Why />
			</section>
			<p className="select-none text-[0px]">Elit Labs</p>
		</main>
	);
}
