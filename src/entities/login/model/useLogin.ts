import { useAuth } from "./../../authcontext/AuthContext";
import { FormEvent, useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { setAuth, isAuth } = useAuth();
	useEffect(() => {
		if (isAuth) {
			navigate("/", {
				replace: true,
			});
		}
	}, [isAuth]);
	const handleSubmit = async (
		event: FormEvent<HTMLFormElement> & FormEvent<HTMLDivElement>
	) => {
		try {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const data = Object.fromEntries(formData.entries());
			setLoading(true);
			await api.post("auth/login", data);
			navigate("/", {
				replace: true,
			});
			setAuth(true);
		} finally {
			setLoading(false);
		}
	};
	return {
		handleSubmit,
		loading,
	};
};

