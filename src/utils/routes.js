import Main from '../pages/Main.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Auth from '../pages/Auth.jsx'
import UserAcc from '../pages/UserAcc.jsx'

import { MAIN_ROUTE, ABOUT_ROUTE, AUTH_ROUTE, USER_ROUTE } from './const.js'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Components: Main,
  },
  {
    path: ABOUT_ROUTE,
    Components: AboutUs,
  },
  {
    path: AUTH_ROUTE,
    Components: Auth,
  },
  {
    path: USER_ROUTE,
    Components: UserAcc,
  },
]
