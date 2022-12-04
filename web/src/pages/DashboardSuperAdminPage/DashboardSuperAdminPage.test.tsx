import { render } from '@redwoodjs/testing/web'

import DashboardSuperAdminPage from './DashboardSuperAdminPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardSuperAdminPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardSuperAdminPage />)
    }).not.toThrow()
  })
})
