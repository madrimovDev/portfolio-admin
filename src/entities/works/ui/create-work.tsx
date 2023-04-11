import { Button, Drawer } from "@shared";
import React, { useState } from "react";

export const CreateWork = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div>
			<Button onClick={() => setOpen(!open)}>Create Work</Button>
			<Drawer
				onClose={() => setOpen(false)}
				open={open}
				pos="right"
			>
				Drawer
			</Drawer>
		</div>
	);
};

