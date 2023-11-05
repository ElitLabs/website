'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

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
			<FaSun className="hidden text-[1.75rem] dark:flex" />
			<FaMoon className="text-[1.75rem] dark:hidden" />
		</button>
	);
}
