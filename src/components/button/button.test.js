import { render, screen } from '@testing-library/react'
import Button from './index'

test('render button component', () => {
  render(<Button>Submit</Button>)
  const childrenElement = screen.getByText(/Submit/i)
  expect(childrenElement).toBeInTheDocument()
})
