import React, {type FC, type PropsWithChildren} from 'react';
import {RouterProvider} from 'react-router-dom';
import rootRouter from '../router/rootRouter';

const RootProvider: FC<PropsWithChildren> = ({children}) => {
	return (
		<>
			<RouterProvider router={rootRouter} />
		</>
	);
};

export default RootProvider;
