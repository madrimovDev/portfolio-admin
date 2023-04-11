import React, { FormEvent } from "react";
import { Button, Input } from "@shared";

export const Login = () => {

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
  };
  
	return (
		<div className="w-full h-screen grid place-items-center">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-3 bg-stone-900 px-4 py-6"
			>
				<Input
					label="Username"
					name="username"
				/>
				<Input
					label="Password"
					type="password"
					name="password"
				/>
				<Button>Login</Button>
			</form>
		</div>
	);
};

