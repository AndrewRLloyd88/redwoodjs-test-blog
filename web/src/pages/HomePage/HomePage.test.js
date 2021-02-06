import { render } from '@redwoodjs/testing'

import HomepagePage from './HomePage'

describe('HomepagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepagePage />)
    }).not.toThrow()
  })
})
