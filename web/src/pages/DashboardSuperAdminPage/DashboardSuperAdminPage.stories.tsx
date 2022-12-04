import type { ComponentMeta } from '@storybook/react'

import DashboardSuperAdminPage from './DashboardSuperAdminPage'

export const generated = () => {
  return <DashboardSuperAdminPage />
}

export default {
  title: 'Pages/DashboardSuperAdminPage',
  component: DashboardSuperAdminPage,
} as ComponentMeta<typeof DashboardSuperAdminPage>
