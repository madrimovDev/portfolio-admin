import React, { FormEvent, useEffect } from "react";
import { useBio } from "./model/useBio";
import {
	Box,
	Container,
	Divider,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
	TextField,
	Input,
	Button,
	Grid,
	Stack,
} from "@mui/material";
import { Label } from "@mui/icons-material";

export const Bio = () => {
	const { bio, getBio, createBio } = useBio();

	const handleSubmit = (
		event: FormEvent<HTMLFormElement> & FormEvent<HTMLDivElement>
	) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		createBio(formData);
		event.currentTarget.reset();
	};

	useEffect(() => {
		if (!bio) {
			getBio();
		}
	}, [bio]);

	return (
		<>
			<Typography variant="h4">Bio</Typography>
			<Divider sx={{ my: 4 }} />

			<Container maxWidth="sm">
				<List>
					<ListItem
						component={Grid}
						container
					>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Title
						</Grid>
						<Grid>{bio?.hero.title}</Grid>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Subtitle
						</Grid>
						<Grid>{bio?.hero.subtitle}</Grid>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Description
						</Grid>
						<Grid>{bio?.hero.description}</Grid>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Img
						</Grid>
						<Grid
							component={"img"}
							src={"http://localhost:3000/" + bio?.hero.img}
							height={100}
						/>
					</ListItem>
				</List>
				<Divider />
				<Box
					onSubmit={handleSubmit}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						mt: 2,
					}}
					component="form"
					encType="multipart/form-data"
				>
					<TextField
						sx={{ width: "100%" }}
						name="title"
						label="Title"
					/>
					<TextField
						sx={{ width: "100%" }}
						name="subtitle"
						label="Subtitle"
					/>
					<TextField
						sx={{ width: "100%" }}
						name="description"
						label="Description"
					/>
					<Input
						name="img"
						slots={{
							root: Button,
							input: 'input',
						}}
						type="file"
					/>

					<Stack
						direction="row"
						spacing={2}
					>
						<Button
							variant="contained"
							type="submit"
						>
							Create
						</Button>
						<Button
							color="error"
							variant="contained"
							type="reset"
						>
							Reset
						</Button>
					</Stack>
				</Box>
			</Container>
		</>
	);
};

