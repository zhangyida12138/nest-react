import React, { Suspense } from 'react'
import { Outlet, RouteObject, useRoutes } from 'react-router-dom'
import { AppRoute, appRoutes } from './routes'

function renderRoutes(routes: AppRoute[]): RouteObject[] {
    return routes.map((route: AppRoute) => {
        const Layout = route.layout || React.Fragment
        const Component = route.element

        // 如果有子路由，父路由应该渲染 Outlet
        if (route.children && route.children.length > 0) {
            return {
                path: route.path,
                element: Layout ? (
                    <Layout>
                        <Outlet />
                    </Layout>
                ) : (
                    <Outlet />
                ),
                children: renderRoutes(route.children),
            }
        }

        // 如果没有子路由，直接渲染组件
        return {
            path: route.path,
            element: Component ? (
                <Suspense fallback={<div style={{ backgroundColor: '#050511', color: '#050511', padding: '20px', borderRadius: '10px' }}>Loading...</div>}>
                    {Layout ? (
                        <Layout>
                            <Component />
                        </Layout>
                    ) : (
                        <Component />
                    )}
                </Suspense>
            ) : undefined,
        }
    })
}

export default function RouterView(): React.ReactElement | null {
    return useRoutes(renderRoutes(appRoutes))
}