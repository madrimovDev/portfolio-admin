import React, {FC, PropsWithChildren} from 'react';
import {useAuth} from '@/shared';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
	// useAuth();
	return (
		<>
			<Navbar />
			<div className="grid grid-cols-12 px-8 py-10 gap-8">
				<div className="col-span-2">
					<Sidebar />
				</div>
				<div className="col-span-10">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
