import { render } from '@redwoodjs/testing/web'

import DefaultPage from './DefaultPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DefaultPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DefaultPage />)
    }).not.toThrow()
  })
})
