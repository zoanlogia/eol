import { render } from '@redwoodjs/testing/web'

import SidebarDefault from './SidebarDefault'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarDefault', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarDefault />)
    }).not.toThrow()
  })
})
