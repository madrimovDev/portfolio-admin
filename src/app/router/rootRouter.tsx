import {Layout} from '@/widgets';
import {createBrowserRouter} from 'react-router-dom';

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: 'Element',
			},
		],
	},
]);
export default rootRouter;
