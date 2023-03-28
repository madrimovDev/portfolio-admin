import React from "react";
import { Outlet } from "react-router-dom";
import { useToLogin } from "./model/useToLogin";
import { Sidebar } from "../../widgets/sidebar/Sidebar";
import { Grid } from "@mui/material";

export const MainLayout = () => {
	useToLogin();
	return (
		<Grid container>
			<Grid width={250}>
				<Sidebar />
			</Grid>
			<Grid p={4} flexGrow={1}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

