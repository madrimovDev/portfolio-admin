import React, { DOMAttributes, FC } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
	children: string;
	disabled?: boolean;
	loading?: boolean;
	onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
}

export const Button: FC<Props> = ({ children, loading, disabled, onClick }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled || loading}
			className="bg-sky-500 h-7 hover:bg-sky-600 disabled:bg-sky-600 disabled:cursor-no-drop transition-all px-2 py-1 rounded-sm relative flex justify-center items-center"
		>
			{loading ? (
				<AiOutlineLoading3Quarters className="animate-spin text-base" />
			) : (
				children
			)}
		</button>
	);
};

