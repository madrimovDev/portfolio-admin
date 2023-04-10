import { ExperienceList } from "@entities";
import React from "react";
import { PageTitle, withPageTransition } from "@shared";

export const Experience = withPageTransition(() => {
	return (
		<div>
			<PageTitle title="Experience" />
			<ExperienceList />
		</div>
	);
});

