import {useEffect} from 'react';
export const useKeyDown = (key: string, handle: () => void) => {
	const listener = (event: KeyboardEvent) => {
		if (event.code === key) {
			handle();
		}
	};
	useEffect(() => {
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);
};
