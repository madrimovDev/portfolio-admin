import React, {
	ButtonHTMLAttributes,
	DOMAttributes,
	FC,
	HTMLAttributes,
	ReactNode,
} from "react";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

interface ColorScheme {
	danger: HTMLAttributes<HTMLElement>["className"];
	success: HTMLAttributes<HTMLElement>["className"];
	ghost: HTMLAttributes<HTMLButtonElement>["className"];
	primary: HTMLAttributes<HTMLButtonElement>["className"];
}

const colorScheme: ColorScheme = {
	primary: "bg-sky-500 hover:bg-sky-400 disabled:bg-sky-400 active:bg-sky-500",
	danger: "bg-red-500 hover:bg-red-400 disabled:bg-red-700 active:bg-red-500",
	success:
		"bg-teal-500 hover:bg-teal-400 disabled:bg-teal-700 active:bg-teal-500",
	ghost: "bg-transparent hover:bg-white/10 disabled:bg-white/30 active:bg-white/20",
};

interface Props {
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	variant?: "primary" | "danger" | "success" | "ghost";
}

export const Button: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
	children,
	loading,
	disabled,
	variant = "primary",
	...params
}) => {
	const color = colorScheme[variant || "primary"];
	return (
		<button
			disabled={disabled || loading}
			className={`
			${color} 
			disabled:cursor-no-drop 
			transition-all  
			px-4
			py-2 
			rounded-sm 
			relative 
			inline-flex 
			gap-2
			justify-center 
			items-center
			font-semibold
			`}
			{...params}
		>
			{children}{" "}
			{loading && <AiOutlineLoading className="animate-spin" />}
		</button>
	);
};

