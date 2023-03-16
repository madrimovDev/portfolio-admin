import React, {ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';

const MenuItem = ({to, children}: {to: string; children: ReactNode}) => {
	const location = useLocation();
	const isActive = location.pathname === to;

	return (
		<li className={`${isActive ? 'bordered' : ''}`}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

const Sidebar = () => {
	return (
		<div className="bg-base-200 p-4 rounded-md">
			<ul className="menu">
				<MenuItem to="/">Bio</MenuItem>
				<MenuItem to="/skills">Skills</MenuItem>
			</ul>
		</div>
	);
};

export default Sidebar;
