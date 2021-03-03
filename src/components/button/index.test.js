import { render } from '@testing-library/react'
import Button from './index'

test('renders correctly', () => {
  const { queryByTestId, queryAllByAltText } = render(
    <Button>Submit</Button>,
  )
  expect(queryByTestId('button')).toBeTruthy()
  expect(queryAllByAltText('Submit')).toBeTruthy()
})
