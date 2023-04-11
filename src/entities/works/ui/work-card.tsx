import React, { FC } from "react";
import { Work } from "./work";
import { Button } from "@shared";
import { BsEye, BsTrash } from "react-icons/bs";

interface Props {
	work: Work;
	onOpen: () => void
}

export const WorkCard: FC<Props> = ({ work, onOpen }) => {
	return (
		<div className="bg-stone-700 w-full p-4 flex gap-2 rounded-md">
			<img
				className="h-[150px] w-[150px] object-cover object-center rounded-sm"
				src={work.img}
			/>
			<div className="flex flex-col w-full gap-2">
				<h4 className="text-xl">{work.title}</h4>
				<p className="flex-grow">{work.description.substring(0, 40)}</p>
				<div className="flex justify-between gap-2 w-full">
					<a
						className="underline text-blue-600"
						href={work.source}
						target="_blank"
					>
						Resource
					</a>

					<div className="flex gap-2">
						<Button onClick={onOpen}>
							<BsEye />
						</Button>
						<Button danger>
							<BsTrash />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

