import {Bio, Login, Skills} from '@/pages';
import {Layout} from '@/widgets';
import {createBrowserRouter} from 'react-router-dom';

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Bio />,
			},
			{
				path: '/skills',
				element: <Skills />,
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
	},
]);
export default rootRouter;
