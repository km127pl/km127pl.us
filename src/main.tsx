import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Homepage } from './pages/Homepage';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { Error } from './pages/Error';
import { LoginPage } from './pages/admin/Login';
import { Blog } from './pages/Blog';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			'ion-icon': IonIconProps
		}
	}
}
interface IonIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	name: string
}


const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
		errorElement: <Error />
	},
	{
		path: "/admin",
		element: (() => {
			return <>
				<Navigate to="/admin/login"></Navigate>
			</>;
		})(),
		errorElement: <Error />
	},
	{
		path: "/admin/login",
		element: <LoginPage />,
		errorElement: <Error />
	},
	{
		path: "/blog",
		element: <Blog />,
		errorElement: <Error />
	},
	{
		path: "/post"
	}

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
