import React, { Suspense, lazy } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    useNavigation,
    useRoutes,
    NonIndexRouteObject,
    Navigate
} from "react-router-dom";
import Layout from '@/layout'
import Error from '@/views/Error'

interface RouteMeta extends NonIndexRouteObject {
    meta: {
        title: string,
        description: string,
        icon: string
    }
}

function lazyLoad(path: string) {
    let Module = React.lazy(() => import(`../views/${path}`));
    return <Module />;
}
export const mainRoutes: RouteMeta[] = [
    {
        path: '/home',
        element: lazyLoad('Home'),
        meta: {
            title: 'Home',
            description: 'Home',
            icon: 'home'
        }
    },
    {
        path: '/calender',
        element: lazyLoad('Calender'),
        meta: {
            title: 'Calender',
            description: 'Calender',
            icon: 'calender'
        }
    },
]
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Navigate to='/home'></Navigate>
            },
            ...mainRoutes,
            {
                path: '*',
                element: <Error />,
            }
        ]
    }
])


console.log('routerL', router)

export { router }