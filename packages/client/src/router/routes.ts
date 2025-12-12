import { ReactNode, lazy } from 'react'
import { MainLayout } from '~/layouts/MainLayout'

export interface AppRoute {
  path: string
  element?: React.LazyExoticComponent<React.ComponentType> | React.ComponentType
  children?: AppRoute[]
  layout?: React.ComponentType<{ children: ReactNode }>
  auth?: boolean
}

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    layout: MainLayout,
    children: [
      {
        path: '',
        element: lazy(async () => import('~/pages/Home')),
      },
      {
        path: 'about',
        element: lazy(async () => import('~/pages/About')),
      },
      {
        path: 'blog',
        element: lazy(async () => import('~/pages/Blog')),
      },
    ],
  },
]
