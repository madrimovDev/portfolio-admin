import { RefObject, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: () => void
) => {
   useEffect(() => {
			const listener = (event: MouseEvent | TouchEvent) => {
				if (!ref.current || ref.current.contains(event.target as Node)) {
					return;
				}
				handler();
			};

			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);

			return () => {
				document.removeEventListener("mousedown", listener);
				document.removeEventListener("touchstart", listener);
			};
		}, [ref, handler]);
};

