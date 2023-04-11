import React, {
	FC,
	HTMLAttributes,
	InputHTMLAttributes,
	useEffect,
	useRef,
} from "react";
import { v4 as uuid } from "uuid";

interface Props {
	label?: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	defaultValue?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
	direction?: "vertical" | "horizontal";
	name: string;
	className?: HTMLAttributes<HTMLInputElement>["className"];
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
	label,
	type = "text",
	name,
	defaultValue,
	className,
	direction = "vertical",
	...params
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const id = uuid().split("-").at(0);

	useEffect(() => {
		inputRef && inputRef.current && inputRef.current.focus();
	}, []);

	return (
		<div
			className={`flex 
			${className || ""} 
			${direction === "vertical" ? "flex-col" : "flex-row items-center"} gap-1`}
		>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				ref={inputRef}
				id={id}
				defaultValue={defaultValue}
				className="w-full bg-transparent appearance-none outline-none border border-gray-400 focus:border-sky-600 transition-all px-2 py-1 rounded-sm "
				type={type}
				name={name}
				{...params}
			/>
		</div>
	);
};

