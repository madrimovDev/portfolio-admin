import { KeyboardEvent, useEffect } from "react";

export const useKeydown = (
	keyCode: KeyboardEvent["code"],
	handler: () => void
) => {
	useEffect(() => {
		const listener = (e: globalThis.KeyboardEvent) => {
			if (e.code === keyCode) {
				handler();
			}
		};

		window.addEventListener("keydown", listener);

		return () => window.removeEventListener("keydown", listener);
	}, [keyCode, handler]);
};

