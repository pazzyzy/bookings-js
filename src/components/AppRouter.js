import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../utils/routes.js'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Components }) => (
        <Route key={path} path={path} element={<Components />} exact />
      ))}
    </Routes>
  )
}

export default AppRouter
