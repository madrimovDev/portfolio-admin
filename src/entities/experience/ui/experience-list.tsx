import { Button, Input, Textarea } from "@shared";
import React, { FC, useState } from "react";
import { BsCheck, BsX } from "react-icons/bs";

interface ItemProps {
	year: number;
	description: string;
}

const ListItem: FC<ItemProps> = ({ description, year }) => {
	const [edit, setEdit] = useState<boolean>(false);

	if (edit) {
		return (
			<form className="flex gap-4">
				<Input
					className="w-[100px]"
					name="year"
					type="number"
					defaultValue={year}
				/>
				<Textarea
          name="description"
          className="w-full"
					defaultValue={description}
				/>
				<Button>
					<BsCheck />
				</Button>
				<Button
					danger
					type="reset"
				>
					<BsX />
				</Button>
			</form>
		);
	}

	return (
		<li
			className="flex gap-4"
			onClick={() => setEdit(true)}
		>
			<span>{year}</span>
			<span>{description}</span>
		</li>
	);
};

export const ExperienceList = () => {
	return (
		<ul className="max-w-2xl w-full mx-auto">
			<ListItem
				year={2021}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa sed aut placeat deleniti, quam porro, obcaecati sapiente delectus nisi, possimus quod praesentium illo? Necessitatibus qui impedit beatae natus error!"
			/>
		</ul>
	);
};

