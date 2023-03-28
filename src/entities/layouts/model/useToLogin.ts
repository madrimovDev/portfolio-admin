import { useAuth } from "./../../authcontext/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useToLogin = () => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	}, [isAuth]);
};

