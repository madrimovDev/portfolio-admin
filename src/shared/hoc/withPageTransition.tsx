import React, { ComponentType, FC } from "react";

export const withPageTransition = <P extends {} = {}>(
	Component: ComponentType<P>
): FC<P> => {
	return (props: P) => {
		const { ...rest } = props;
		return <Component {...rest} />;
	};
};

