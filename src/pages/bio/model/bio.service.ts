import {api} from '@/shared';

export class BioService {
	private static readonly API_URL = '/bio';

	static async getAllBios(): Promise<Bio.BioData[]> {
		const response = await api.get<Bio.BiosResponse>(BioService.API_URL);
		return response.data.bios;
	}

	static async createBio(bio: Omit<Bio.BioData, 'id'>): Promise<Bio.BioData> {
		const response = await api.post<Bio.BioResponse>(BioService.API_URL, bio);
		return response.data.bio;
	}

	static async updateBio(
		bio: Omit<Bio.BioData, 'id'>,
		id: number,
	): Promise<Bio.BioData> {
		const response = await api.put<Bio.BioResponse>(
			`${BioService.API_URL}/${id}`,
			bio,
		);
		return response.data.bio;
	}
}
