import { render } from '@redwoodjs/testing/web'

import DashboardAdminPage from './DashboardAdminPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardAdminPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardAdminPage />)
    }).not.toThrow()
  })
})
