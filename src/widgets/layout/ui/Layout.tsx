import { useAuth } from '@/shared';
import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
	useAuth();
	return (
		<>
			<Outlet />
		</>
	);
};

export default Layout;
