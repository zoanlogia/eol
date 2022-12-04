import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardAdminPage = () => {
  return (
    <>
      <MetaTags title="DashboardAdmin" description="DashboardAdmin page" />

      <h1>DashboardAdminPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardAdminPage/DashboardAdminPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboardAdmin</code>, link to me with `
        <Link to={routes.dashboardAdmin()}>DashboardAdmin</Link>`
      </p>
    </>
  )
}

export default DashboardAdminPage
