import { render } from '@testing-library/react'
import Shimmer from './index'

test('renders correctly', () => {
  const { queryByTestId } = render(<Shimmer />)
  expect(queryByTestId('shimmer')).toBeTruthy()
})
