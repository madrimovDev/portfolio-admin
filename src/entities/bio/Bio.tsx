import React, { FC, FormEvent, useEffect, useState } from "react";
import { BioResponse, useBio } from "./model/useBio";
import {
	Container,
	Divider,
	List,
	ListItem,
	Typography,
	Grid,
	Box,
	Input,
	TextField,
	Button,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";

type Editable = {
	data: string | undefined;
};

type EditableType = {
	as?: keyof HTMLElementTagNameMap;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
	fieldName: string;
};

const EditableText: FC<Editable & EditableType> = ({
	data,
	handleSubmit,
	as = "div",
	fieldName,
}) => {
	const [editing, setEditing] = useState<boolean>(false);
	if (editing) {
		return (
			<Box
				component="form"
				onSubmit={(event) => {
					handleSubmit(event);
					setEditing(false);
				}}
			>
				{as !== "img" ? (
					<TextField
						name={fieldName}
						variant="standard"
						defaultValue={data}
						size="small"
					/>
				) : (
					<Input
						type="file"
						name="img"
					/>
				)}
				<Button
					color="success"
					size="small"
					type="submit"
				>
					<Check />
				</Button>
				<Button
					color="error"
					size="small"
					type="button"
					onClick={() => setEditing(false)}
				>
					<Close />
				</Button>
			</Box>
		);
	}
	if (as === "img") {
		return (
			<Box
				component="img"
				src={data}
				height={100}
				sx={{
					cursor: "pointer",
				}}
				onClick={() => setEditing(true)}
			/>
		);
	}
	return (
		<Box
			sx={{
				cursor: "pointer",
			}}
			component={as}
			onClick={() => setEditing(true)}
		>
			{data}
		</Box>
	);
};

export const Bio = () => {
	const { bio, getBio, updateBio } = useBio();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		updateBio(formData, bio?.hero.id);
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
						<EditableText
							fieldName="title"
							handleSubmit={handleSubmit}
							data={bio?.hero.title}
						/>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Subtitle
						</Grid>
						<EditableText
							fieldName="subtitle"
							handleSubmit={handleSubmit}
							data={bio?.hero.subtitle}
						/>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Description
						</Grid>
						<EditableText
							fieldName="description"
							handleSubmit={handleSubmit}
							data={bio?.hero.description}
						/>
					</ListItem>
					<ListItem>
						<Grid
							color="gray"
							flexGrow={1}
						>
							Img
						</Grid>
						<EditableText
							data={`http://localhost:3000/${bio?.hero.img}`}
							fieldName="img"
							handleSubmit={handleSubmit}
							as="img"
						/>
					</ListItem>
				</List>
			</Container>
		</>
	);
};

