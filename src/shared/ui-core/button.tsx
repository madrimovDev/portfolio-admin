import React, {
	ButtonHTMLAttributes,
	DOMAttributes,
	FC,
	ReactNode,
} from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	danger?: boolean;
	onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
}

export const Button: FC<Props> = ({
	children,
	loading,
	disabled,
	onClick,
	danger,
	type = 'submit'
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || loading}
			className={`
			${
				!danger
					? "bg-sky-500 hover:bg-sky-600 disabled:bg-sky-600 "
					: "bg-red-500 hover:bg-red-600"
			} 
			disabled:cursor-no-drop 
			transition-all 
			h-9 
			px-2 
			py-1 
			rounded-sm 
			relative 
			flex 
			justify-center 
			items-center
			`}
		>
			{loading ? (
				<AiOutlineLoading3Quarters className="animate-spin text-base" />
			) : (
				children
			)}
		</button>
	);
};

