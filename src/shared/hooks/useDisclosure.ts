import {useState} from 'react';
export const useDisclouse = () => {
  const [open, setOpen] = useState<boolean>(false);
  
	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);
	const onToggle = () => setOpen(!open);

	return {
		open,
		onClose,
		onOpen,
		onToggle,
	};
};
