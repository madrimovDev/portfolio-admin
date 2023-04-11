import React, { useState } from "react";
import { Button, Input, Textarea } from "@shared";
import { AnimatePresence, motion } from "framer-motion";

export const CreateExperience = () => {
	const [create, setCreate] = useState<boolean>(false);
	return (
		<div className="max-w-2xl w-full mx-auto flex flex-col">
			<Button
				onClick={() => setCreate(!create)}
				danger={create}
			>
				{create ? "Close" : "Create Experience"}
			</Button>
			<AnimatePresence mode="wait">
				{create && (
					<motion.form
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						className="flex flex-col gap-4 mt-10"
					>
						<Input
							name="year"
							label="Year"
							type="number"
							min={2020}
							defaultValue={2020}
						/>
						<Textarea
							name="description"
							label="description"
						/>
						<Button>Create</Button>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
};

