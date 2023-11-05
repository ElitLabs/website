'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<button
			onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
			className="text-2xl transition-all duration-300 hover:text-neutral-800 hover:dark:text-neutral-200 md:text-4xl">
			{currentTheme == 'dark' ? <FaSun /> : <FaMoon />}
		</button>
	);
}
