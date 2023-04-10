import React, { FC, InputHTMLAttributes } from "react";

interface Props {
	label?: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	name: string;
}

export const Input: FC<Props> = ({ label, type = "text", name }) => {
	return (
		<div className="flex flex-col gap-1">
			{label && <label htmlFor="">{label}</label>}
			<input
				className="bg-transparent outline-none border border-gray-400 focus:border-sky-600 transition-all px-2 py-1 rounded-sm "
				type={type}
				name={name}
			/>
		</div>
	);
};

