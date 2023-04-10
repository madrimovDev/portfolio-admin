import React from "react";
import { PageTitle, withPageTransition } from "@shared";
import { HeroList } from "@entities";

export const Hero = withPageTransition(() => {
	return (
		<div>
			<PageTitle title="Hero" />
			<HeroList />
		</div>
	);
});

