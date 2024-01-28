// Generated by CodiumAI
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '@/App'

describe('App', () => {
  test('confirm that the testing software is behaving', () => {
    expect(true).toBeTruthy()
  })

  // Renders header content with logo and cart icon
  it('should render header content with logo and cart icon', () => {
    render(<App />)

    const logo = screen.getByLabelText('sneakers')
    expect(logo).toBeInTheDocument()

    const cartIcon = screen.getByLabelText('Cart')
    expect(cartIcon).toBeInTheDocument()
  })

  // Displays mobile product carousel with images
  it('should display mobile product carousel with images', () => {
    render(<App />)

    const carousel = screen.getByLabelText('Product images')
    expect(carousel).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  // Shows product details including name, description, price, and discount
  it('should show product details including name, description, price, and discount', () => {
    render(<App />)

    const productName = screen.getByText('Fall Limited Edition Sneakers')
    expect(productName).toBeInTheDocument()

    const productDescription = screen.getByText(/These low-profile sneakers/)
    expect(productDescription).toBeInTheDocument()

    const productPrice = screen.getByText('$125.00')
    expect(productPrice).toBeInTheDocument()

    const productDiscount = screen.getByText('50%')
    expect(productDiscount).toBeInTheDocument()
  })

  // Cart dialog is not displayed when cart icon is not clicked
  it('should not display cart dialog when cart icon is not clicked', () => {
    render(<App />)

    const cartDialog = screen.queryByRole('dialog')
    expect(cartDialog).not.toBeInTheDocument()
  })

  // Cart dialog is displayed at the bottom of the screen
  it('should display cart dialog at the bottom of the screen', async () => {
    const getCartDialog = () => screen.queryByRole('dialog')

    render(<App />)

    expect(getCartDialog()).not.toBeInTheDocument()

    const cartIcon = screen.getByRole('button', { name: 'Cart' })
    await waitFor(() => fireEvent.click(cartIcon))

    const cartDialog = getCartDialog()
    expect(cartDialog).toBeInTheDocument()

    const container = document.querySelector('header')
    const containerHeight = container?.offsetHeight ?? 0
    expect(cartDialog).toHaveStyle(`top: ${containerHeight}px`)
  })
})
