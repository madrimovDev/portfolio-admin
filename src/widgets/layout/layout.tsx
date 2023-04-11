import React from "react";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="grid grid-cols-[250px,1fr] gap-4">
			<div className="col-span-1 relative z-10">
				<Sidebar />
			</div>
			<div className="p-4">
				<Outlet />
			</div>
		</div>
	);
};

