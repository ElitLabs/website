import CallToAction from '@/components/Home/CTA';
import Popular from '@/components/Home/Popular';
import Why from '@/components/Home/Why';

export const metadata = {
	title: 'ElitLabs | Home',
};

export default function Home() {
	return (
		<main>
			<header>
				<CallToAction />
			</header>
			<section className="flex flex-col items-center">
				<Popular />
				<Why />
			</section>
		</main>
	);
}
