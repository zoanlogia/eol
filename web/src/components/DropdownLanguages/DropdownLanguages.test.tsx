import { render } from '@redwoodjs/testing/web'

import DropdownLanguages from './DropdownLanguages'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DropdownLanguages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropdownLanguages />)
    }).not.toThrow()
  })
})
