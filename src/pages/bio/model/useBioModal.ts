import {create} from 'zustand';

interface BioModalState<T extends any = any> {
	open: boolean;
	data?: T;
	onOpen: (data?: T) => void;
	onClose: () => void;
}

export const useBioModal = create<BioModalState>((set, get) => ({
	open: false,
	data: undefined,
	onOpen(data) {
		set({
			data: data,
			open: true,
		});
	},
	onClose() {
		set({
			data: undefined,
			open: false,
		});
	},
}));
