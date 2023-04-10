import React, { FC, ReactNode } from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

const MenuItem: FC<DataSource> = ({ title, icon, to }) => {
	const { pathname } = useLocation();
	const Icon = icon ? icon : () => <></>;
	return (
		<li>
			{to ? (
				<Link
					className={`transition-all flex gap-2 items-center px-4 py-2 mb-2 rounded-sm  ${
						pathname === to ? "bg-sky-700" : "hover:bg-stone-800"
					}`}
					to={to}
				>
					<Icon />
					{title}
				</Link>
			) : (
				<span>
					<Icon />
					{title}
				</span>
			)}
		</li>
	);
};

type DataSource = {
	to?: string;
	title: ReactNode;
	icon?: IconType;
};

export interface MenuProps {
	dataSource: DataSource[];
}

export const Menu: FC<MenuProps> = ({ dataSource }) => {
	return (
		<ul>
			{dataSource.map((data, index) => {
				return (
					<MenuItem
						key={index}
						{...data}
					/>
				);
			})}
		</ul>
	);
};

