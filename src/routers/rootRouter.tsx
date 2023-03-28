import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { MainLayout } from "../entities/layouts/MainLayout";
import { AuthProvider } from "../entities/authcontext/AuthContext";
import { Bio } from "../pages/Bio";
import Experience from "../pages/Experience";
import { Works } from "../pages/Works";
import { Blogs } from "../pages/Blogs";
export const rootRouter = createBrowserRouter([
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "",
		element: <MainLayout />,
		children: [
			{
				path: "",
				element: <Bio />,
			},
			{
				path: "experience",
				element: <Experience />,
			},
			{
				path: "works",
				element: <Works />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
		],
	},
]);

