import React from 'react'
import { Layout } from 'react-feather'

import HomePage from '../pages/Home'
import Planete from '../pages/Planete/planete'
import { routesPath } from './index'

const guestRoutes = {
  id: 'Planete',
  path: '',
  icon: <Layout />,
  component: null,
  children: [
    {
      path: routesPath.planete,
      name: 'Planete',
      component: Planete,
    },
  ],
}

export const guestLayoutRoutes = [guestRoutes]

const registerRoutes = {}

export const registerLayoutRoutes = [registerRoutes]

const authRoutes = {}

export const authLayoutRoutes = [authRoutes]

const publicRoutes = {
  id: 'Public',
  path: '',
  icon: <Layout />,
  component: null,
  children: [
    {
      path: routesPath.home,
      name: 'Home',
      component: HomePage,
    },
  ],
}

export const publicLayoutRoutes = [publicRoutes]
