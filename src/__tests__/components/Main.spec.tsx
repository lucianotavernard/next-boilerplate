import { render, screen } from '@testing-library/react'

import { Main } from '../../components/Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('link', { name: /learn next.js/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    render(<Main />)

    expect(screen.getByRole('link', { name: /learn next.js/i })).toHaveStyle({
      color: '#067df7'
    })
  })
})
