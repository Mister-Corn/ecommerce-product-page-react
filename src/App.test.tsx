import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('confirm that the testing software is behaving', () => {
    expect(true).toBeTruthy()
  })

  test('renders header content', () => {
    render(<App />)

    const logo = screen.getByLabelText('sneakers')
    expect(logo).toBeInTheDocument()
    const cartIcon = screen.getByLabelText('Cart')
    expect(cartIcon).toBeInTheDocument()
  })
})
