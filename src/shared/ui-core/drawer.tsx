import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./button";
import { BsX } from "react-icons/bs";

interface Props {
	pos?: "left" | "right";
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

export const Drawer: FC<Props> = ({ children, open, pos = "left", onClose }) => {
	const DrawerContainer = (
		<AnimatePresence mode="wait">
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed z-50 w-full  h-screen inset-0 bg-stone-900/50"
				>
					<motion.div
						initial={{
							x: "100%",
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
						exit={{
							x: "100%",
							opacity: 0,
						}}
						transition={{
							duration: 0.5,
						}}
						className={`h-screen max-w-xl w-full bg-stone-900 fixed top-0 right-0`}
          >
            <Button onClick={onClose}>
              <BsX/>
            </Button>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	return createPortal(
		DrawerContainer,
		document.getElementById("drawer") as HTMLDivElement
	);
};

