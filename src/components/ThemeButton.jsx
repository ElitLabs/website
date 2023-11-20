'use client';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export default function ThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => {
				setTheme(
					theme === 'system'
						? systemTheme === 'dark'
						: theme === 'dark'
						  ? 'light'
						  : 'dark',
				);
			}}
			className="transition-all duration-300 hover:text-neutral-800 hover:dark:text-neutral-200 md:text-4xl">
			<BsSunFill className="hidden text-[1.75rem] dark:flex" />
			<BsMoonFill className="text-[1.75rem] dark:hidden" />
		</button>
	);
}
