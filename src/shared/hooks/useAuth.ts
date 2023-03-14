import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from '../service/axios.service';

export const useAuth = () => {
	const history = useNavigate();

	useEffect(() => {
		AuthService.verify().then((isAuthenticated) => {
			if (isAuthenticated) {
				history('/', {
					replace: true,
				});
			} else {
				history('/login', {
					replace: true,
				});
			}
		});
	}, [history]);

	return null;
};
