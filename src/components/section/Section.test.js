import { render } from '@testing-library/react'
import Section from './index'

test('renders correctly', () => {
  const { queryByTestId } = render(<Section />)
  expect(queryByTestId('section')).toBeTruthy()
})
