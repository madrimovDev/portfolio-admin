import React, { FC, HTMLAttributes, InputHTMLAttributes } from "react";

interface Props {
	label?: string;
	defaultValue?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
	name: string;
	direction?: "vertical" | "horizontal";
	className?: HTMLAttributes<HTMLInputElement>["className"];
}

export const Textarea: FC<Props> = ({
	label,
	name,
	defaultValue,
	className,
	direction = 'vertical',
}) => {
	return (
		<div
			className={`flex 
			${className || ""} 
			${direction === "vertical" ? "flex-col" : "flex-row items-center"} gap-1 `}
		>
			{label && <label htmlFor="">{label}</label>}
			<textarea
				defaultValue={defaultValue}
				className="w-full min-h-[100px] resize-y bg-transparent outline-none border border-gray-400 focus:border-sky-600 transition-all px-2 py-1 rounded-sm "
				name={name}
			/>
		</div>
	);
};

