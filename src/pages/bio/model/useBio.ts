import {create} from 'zustand';
import {BioService} from './/bio.service';

type BioState = {
	bios: Bio.BioData[];
	isLoading: boolean;
	isError: boolean;
	error: any;
	setAllBios: () => Promise<void>;
	createBio: (bio: Omit<Bio.BioData, 'id'>) => Promise<void>;
	updateBio: (id: number, bio: Omit<Bio.BioData, 'id'>) => Promise<void>;
};

export const useBioStore = create<BioState>((set, get) => ({
	bios: [],
	isLoading: false,
	isError: false,
	error: null,
	setAllBios: async () => {
		try {
			set({isLoading: true});
			const bios = await BioService.getAllBios();
			set({
				bios,
				isLoading: false,
			});
		} catch (error) {
			set({isError: true, error, isLoading: false});
		}
	},
	createBio: async (bio) => {
		try {
			set({isLoading: true});
			const createdBio = await BioService.createBio(bio);
			set((state) => ({
				bios: [...state.bios, createdBio],
				isLoading: false,
			}));
		} catch (error) {
			set({isError: true, error, isLoading: false});
		}
	},
	updateBio: async (id, bio) => {
		try {
			set({isLoading: true});
			const updatedBio = await BioService.updateBio(bio, id);
			set((state) => ({
				bios: state.bios.map((b) => (b.id === updatedBio.id ? updatedBio : b)),
				isLoading: false,
			}));
		} catch (error) {
			set({isError: true, error, isLoading: false});
		}
	},
}));
