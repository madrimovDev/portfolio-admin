import React, { ComponentType, FC } from "react";
import { motion } from "framer-motion";

export const withPageTransition = <P extends {} = {}>(
	Component: ComponentType<P>
): FC<P> => {
	return (props: P) => {
		const { ...rest } = props;
		return (
			<motion.div
				initial={{ x: "-100%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: "-100%", opacity: 0 }}
				transition={{
					type: "spring",
					duration: 0.4,
				}}
				className="bg-sky-400 min-h-screen"
			>
				<Component {...rest} />
			</motion.div>
		);
	};
};



