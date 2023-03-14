import {FormEvent} from 'react';
import {toast} from 'react-toastify';

type ErrorData = {
	[key: string]: string;
};

export const useForm = <T>(
	handler: (data: T) => Promise<void>,
	timeout: number = 3000,
) => {
	let errors: HTMLInputElement[] = [];
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;

		if (form) {
			const formData = new FormData(form);
			const data = Object.fromEntries(formData.entries()) as T;

			for (let key in data) {
				if (data[key] === '') {
					errors.push(form[key]);
				}
			}

			if (!errors.length) {
				handler(data);
				form.reset();
			} else {
				toast(`${errors.map((e) => e.name).join(', ')} is required`, {
					type: 'error',
					autoClose: timeout
				});
				errors.forEach((error) => {
					error.classList.add('border', 'border-red-400');
					errors = [];
					setTimeout(() => {
						error.classList.remove('border', 'border-red-400');
					}, timeout);
				});
			}
		}
	};

	return {
		onSubmit,
		errors,
	};
};
