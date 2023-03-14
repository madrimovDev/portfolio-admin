import {storage} from '@/shared';
import {api} from '@/shared';

interface UserResponse {
	message: string;
	user: {
		id: number;
		username: string;
		token: string;
		refreshToken: string;
	};
}

export default class AuthService {
	static async login(username: string, password: string): Promise<void> {
		const response = await api.post<UserResponse>('/auth/login', {
			username,
			password,
		});
		const {message, user} = response.data;
		storage.setItem('user', {...user});
	}

	static async verify(): Promise<boolean> {
		try {
			await api.get('/auth/verify');
			return true;
		} catch {
			storage.removeItem('user');
			return false;
		}
	}
}
