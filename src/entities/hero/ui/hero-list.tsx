import { Button, IconButton, Input } from "@shared";
import React, { FC, useState } from "react";
import { BsCheck, BsSave, BsX } from "react-icons/bs";

interface Props {
	_key: string;
	value: string;
	type?: "text" | "img";
}

const ListItem: FC<Props> = ({ _key, value, type = "text" }) => {
	const [edit, setEdit] = useState<boolean>(false);

	return (
		<li className="flex justify-between text-lg py-3">
			<span className="font-bold text-gray-500">{_key}</span>
			{edit ? (
				<form className="flex gap-2 items-center">
					<Input
						name={_key.toLowerCase()}
						defaultValue={value}
					/>
					<IconButton>
						<BsCheck />
					</IconButton>
					<IconButton
						onClick={() => setEdit(false)}
						type="reset"
						variant="danger"
					>
						<BsX />
					</IconButton>
				</form>
			) : (
				<span
					className="cursor-pointer"
					onClick={() => setEdit(true)}
				>
					{value}
				</span>
			)}
		</li>
	);
};

export const HeroList = () => {
	return (
		<ul className="max-w-xl mx-auto w-full divide-y-2 space-y-2 divide-white/10">
			<ListItem
				_key="Title"
				value="Xudoshukur Madrimov"
			/>
			<ListItem
				_key="Subtitle"
				value="Front-end Engineer / Mentor"
			/>
			<ListItem
				_key="Description"
				value="Hello, I'm a Front-end Engineer from Uzbekistan"
			/>
		</ul>
	);
};

