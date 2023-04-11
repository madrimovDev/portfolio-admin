import React from "react";
import { Divider, Menu, MenuProps } from "@shared";
import {
	BsBarChartLine,
	BsBriefcase,
	BsHouse,
	BsNewspaper,
} from "react-icons/bs";

const Logo = () => {
	return (
		<span className="block px-4 py-2 text-center bg-stone-800 rounded-md text-lg text-sky-500 hover:scale-105 hover:bg-stone-700 active:scale-100 transition-all touch-none select-none">
			Admin Panel
		</span>
	);
};

const menuItems: MenuProps["dataSource"] = [
	{
		to: "/",
		title: "Hero",
		icon: BsHouse,
	},
	{
		to: "/experience",
		title: "Experience",
		icon: BsBarChartLine,
	},
	{
		to: "/works",
		title: "Works",
		icon: BsBriefcase,
	},
	{
		to: "/blogs",
		title: "Blogs",
		icon: BsNewspaper,
	},
];

export const Sidebar = () => {
	return (
		<div className="bg-stone-900 min-h-screen p-4">
			<Logo />
			<Divider />
			<Menu dataSource={menuItems} />
		</div>
	);
};

