import React, { useState } from "react";
import { Button, Card, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useLogin } from "./model/useLogin";

export const Login = () => {
	const { loading, handleSubmit } = useLogin();
	return (
		<Box
			sx={{
				height: "100vh",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Card
				component="form"
				autoComplete="off"
				onSubmit={handleSubmit}
				sx={{
					width: "100%",
					maxWidth: "300px",
					padding: 3,
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				<TextField
					sx={{ width: "100%" }}
					label="Username"
					variant="outlined"
					type="text"
					name="username"
					placeholder="username"
				/>
				<TextField
					sx={{ width: "100%" }}
					label="Password"
					variant="outlined"
					type="password"
					name="password"
					placeholder="password"
				/>
				<Button
					disabled={loading}
					variant="contained"
					color="primary"
					type="submit"
				>
					LogIn
				</Button>
			</Card>
		</Box>
	);
};

