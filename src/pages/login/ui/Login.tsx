import {api, useAuth, useForm} from '@/shared';
import {useState} from 'react';
import {toast} from 'react-toastify';
import {AuthService} from '@/shared';
import {useNavigate} from 'react-router-dom';
const Login = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	useAuth();
	const {onSubmit} = useForm(
		async (data: {username: string; password: string}) => {
			try {
				setLoading(true);
				await AuthService.login(data.username, data.password);
				toast('Login Succesful', {type: 'success'});
				setLoading(false);
				navigate('/', {
					replace: true,
				});
			} catch (err) {
				toast('Has Errors', {type: 'error'});
				setLoading(false);
			}
		},
	);

	return (
		<div className="grid place-items-center h-screen">
			<form
				onSubmit={onSubmit}
				className="max-w-sm w-full bg-base-200 flex flex-col gap-4 border border-gray-700 px-4 py-8 rounded-md shadow-md"
			>
				<h2>Login to Admin Panel</h2>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Username</span>
					</label>
					<input
						className="input input-md"
						placeholder="Username"
						name="username"
						type="text"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						className="input input-md"
						placeholder="Password"
						name="password"
						type="password"
					/>
				</div>
				<button disabled={isLoading} className="btn btn-primary w-full btn-md">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
