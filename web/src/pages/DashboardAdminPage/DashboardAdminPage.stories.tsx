import type { ComponentMeta } from '@storybook/react'

import DashboardAdminPage from './DashboardAdminPage'

export const generated = () => {
  return <DashboardAdminPage />
}

export default {
  title: 'Pages/DashboardAdminPage',
  component: DashboardAdminPage,
} as ComponentMeta<typeof DashboardAdminPage>
