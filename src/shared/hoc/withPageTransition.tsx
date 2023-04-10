import React, { ComponentType, FC } from "react";
import { motion } from "framer-motion";

export const withPageTransition = <P extends {} = {}>(
	Component: ComponentType<P>
): FC<P> => {
	return (props: P) => {
		const { ...rest } = props;
		return (
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 30, opacity: 0 }}
				transition={{
					type: "spring",
					duration: 0.4,
				}}
			>
				<Component {...rest} />
			</motion.div>
		);
	};
};



