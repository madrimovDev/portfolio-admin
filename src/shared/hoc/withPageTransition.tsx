import React, { ComponentType, FC } from "react";
import { motion } from "framer-motion";

export const withPageTransition = <P extends {} = {}>(
	Component: ComponentType<P>
): FC<P> => {
	return (props: P) => {
		const { ...rest } = props;
		return (
			<motion.div
				initial={{ x: "-100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				className="bg-sky-400 min-h-screen"
			>
				<Component {...rest} />
			</motion.div>
		);
	};
};

