import { create } from "zustand";
import api from "../../../api";

interface BioResponse {
	message: string;
	hero: {
		id: number;
		title: string;
		subtitle: string;
		description: string;
		img: string;
	};
}

type UseBio = {
	bio: BioResponse | null;
	getBio: () => Promise<void>;
	createBio: <T extends unknown = unknown>(bio: T) => Promise<void>;
};

export const useBio = create<UseBio>((set, get) => ({
	bio: null,
	async getBio() {
		const { data } = await api.get<BioResponse>("/hero");
		set({
			bio: data,
		});
	},
	async createBio(bio) {
		const { data } = await api.post<BioResponse>("/hero", bio, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		set({
			bio: data,
		});
	},
}));

