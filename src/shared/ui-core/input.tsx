import React, { FC, HTMLAttributes, InputHTMLAttributes } from "react";

interface Props {
	label?: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	defaultValue?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
	name: string;
	className?: HTMLAttributes<HTMLInputElement>["className"];
}

export const Input: FC<Props> = ({
	label,
	type = "text",
	name,
	defaultValue,
	className,
}) => {
	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			{label && <label htmlFor="">{label}</label>}
			<input
				defaultValue={defaultValue}
				className="w-full bg-transparent appearance-none outline-none border border-gray-400 focus:border-sky-600 transition-all px-2 py-1 rounded-sm "
				type={type}
				name={name}
			/>
		</div>
	);
};

