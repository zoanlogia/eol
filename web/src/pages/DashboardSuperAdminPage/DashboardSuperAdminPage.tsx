import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardSuperAdminPage = () => {
  return (
    <>
      <MetaTags title="DashboardSuperAdmin" description="DashboardSuperAdmin page" />

      <h1>DashboardSuperAdminPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardSuperAdminPage/DashboardSuperAdminPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboardSuperAdmin</code>, link to me with `
        <Link to={routes.dashboardSuperAdmin()}>DashboardSuperAdmin</Link>`
      </p>
    </>
  )
}

export default DashboardSuperAdminPage
