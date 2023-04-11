import React from "react";
import { WorkCard } from "./work-card";
import { Work } from "./work";
import { Drawer, useDisclosure } from "@shared";

const works: Work[] = [
	{
		id: 1,
		description: "Lorem Ipsum",
		img: "https://loremflickr.com/320/240",
		source: "https://github.com",
		title: "Work Title",
	},
	{
		id: 2,
		description: "Lorem Ipsum",
		img: "https://loremflickr.com/320/240",
		source: "https://github.com",
		title: "Work Title",
	},
	{
		id: 3,
		description: "Lorem Ipsum",
		img: "https://loremflickr.com/320/240",
		source: "https://github.com",
		title: "Work Title",
	},
	{
		id: 4,
		description: "Lorem Ipsum",
		img: "https://loremflickr.com/320/240",
		source: "https://github.com",
		title: "Work Title",
	},
	{
		id: 5,
		description: "Lorem Ipsum",
		img: "https://loremflickr.com/320/240",
		source: "https://github.com",
		title: "Work Title",
	},
];

export const WorkCards = () => {
	const { open, onClose, onOpen } = useDisclosure();
	return (
		<div className="grid grid-cols-4 place-items-center gap-4 mt-4">
			{works.map((work) => (
				<WorkCard
					work={work}
					key={work.id}
					onOpen={onOpen}
				/>
			))}
			<Drawer
				open={open}
				onClose={onClose}
			>
				Edit Drawer
			</Drawer>
		</div>
	);
};

