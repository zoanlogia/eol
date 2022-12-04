// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'
import DashboardAdminPage from './pages/DashboardAdminPage/DashboardAdminPage'
import DashboardSuperAdminPage from './pages/DashboardSuperAdminPage/DashboardSuperAdminPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/Dashboard" page={DashboardPage} name="Dashboard" />
      <Route path="/" page={DefaultPage} name="default" />
      <Route notfound page={NotFoundPage} />

      <Private unauthenticated="defaultPage">
        <Route path="/admin" page={DashboardAdminPage} name="admin" />
        <Route path="/superAdmin" page={DashboardSuperAdminPage} name="secret" />
      </Private>
    </Router>
  )
}

export default Routes
