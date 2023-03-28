import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface IAuthContext {
	isAuth: boolean;
	setAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuth, setAuth] = useState(false);
	return (
		<AuthContext.Provider value={{ isAuth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

