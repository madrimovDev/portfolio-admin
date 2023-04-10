import { createBrowserRouter } from "react-router-dom";
import { Login, Hero, Experience, Works, Blogs } from "@pages";
import { Layout } from "@widgets";

export const rootRoute = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Hero />,
			},
			{
				path: "/experience",
				element: <Experience />,
			},
			{
				path: "/works",
				element: <Works />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

