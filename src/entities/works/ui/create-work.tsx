import { Button, Drawer, useDisclosure } from "@shared";
import React, { useState } from "react";

export const CreateWork = () => {
	const { open, onClose, onOpen } = useDisclosure();
	return (
		<div>
			<Button onClick={onOpen}>Create Work</Button>
			<Drawer
				onClose={onClose}
				open={open}
			>
				Drawer
			</Drawer>
		</div>
	);
};

