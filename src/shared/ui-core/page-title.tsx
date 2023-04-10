import React, { FC } from "react";

interface Props {
	title: string;
}

export const PageTitle: FC<Props> = ({ title }) => {
	return <h2 className="text-3xl pb-4 mb-4 border-b border-white/10">{title}</h2>;
};

