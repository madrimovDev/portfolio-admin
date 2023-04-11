import { CreateWork, WorkCards } from "@entities";
import { PageTitle, withPageTransition } from "@shared";
import React from "react";

export const Works = withPageTransition(() => {
	return (
		<div>
			<PageTitle title="Works" />
			<CreateWork />
			<WorkCards />
		</div>
	);
});

