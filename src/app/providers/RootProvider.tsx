import React, {type FC, type PropsWithChildren} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RouterProvider} from 'react-router-dom';
import rootRouter from '../router/rootRouter';

const RootProvider: FC<PropsWithChildren> = ({children}) => {
	return (
		<>
			<RouterProvider router={rootRouter} />
			<ToastContainer />
		</>
	);
};

export default RootProvider;
