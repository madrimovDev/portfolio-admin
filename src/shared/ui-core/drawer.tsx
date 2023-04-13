import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import { IconButton, useKeydown, useOutsideClick } from "@shared";

interface Props {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

export const Drawer: FC<Props> = ({ children, open, onClose }) => {
	const ref = useRef<HTMLDivElement>(null);
	useOutsideClick(ref, onClose);
	useKeydown("Escape", onClose);
	const DrawerContainer = (
		<AnimatePresence mode="wait">
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {
							delay: 0.25,
						},
					}}
					transition={{
						duration: 0.15,
					}}
					className="fixed z-50 w-full text-gray-100  h-screen inset-0 backdrop-blur-sm bg-stone-900/50"
				>
					<motion.div
						ref={ref}
						initial={{
							x: "100%",
						}}
						animate={{
							x: 0,
						}}
						exit={{
							x: "100%",
						}}
						transition={{
							duration: 0.25,
						}}
						className={`h-screen max-w-xl w-full bg-stone-900 fixed top-0 right-0 p-4`}
					>
						<IconButton variant="ghost" onClick={onClose}>
							<BsX />
						</IconButton>
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

