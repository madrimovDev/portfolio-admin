import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { rootRoute } from "./routes/rootRoute";
import { AnimatePresence } from "framer-motion";

export const Providers = () => {
	const location = useLocation();
	return (
		<div className="bg-stone-950 text-gray-100 h-screen overflow-hidden">
			<AnimatePresence
				initial={false}
				mode="wait"
			>
				<Routes
					location={location}
					key={location.pathname}
				>
					{rootRoute.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								element={route.element}
							>
								{route.children &&
									route.children.map((child, index) => (
										<Route
											path={child.path}
											element={child.element}
											key={index}
										/>
									))}
							</Route>
						);
					})}
				</Routes>
			</AnimatePresence>
		</div>
	);
};

