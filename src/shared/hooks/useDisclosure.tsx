import { useMemo, useState } from "react";

export const useDisclosure = () => {
	const [open, setOpen] = useState<boolean>(false);
	
	const functions = useMemo(() => {
		return {
			onOpen() {
				setOpen(true);
			},
			onClose() {
				setOpen(false);
			},
			onToggle() {
				setOpen(!open);
			},
		};
	}, []);
  return {
    open, ...functions
  };
};
