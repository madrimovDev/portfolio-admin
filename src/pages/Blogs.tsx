import { Button, IconButton, PageTitle, withPageTransition } from "@shared";
import React from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { BsX } from "react-icons/bs";

export const Blogs = withPageTransition(() => {
	return (
		<div>
			<PageTitle title="Blogs" />
			<Button variant="success">Success</Button>
			<Button variant="danger">Danger</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	);
});

