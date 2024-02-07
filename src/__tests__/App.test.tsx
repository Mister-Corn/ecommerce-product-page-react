// With help by CodiumAI
import App from '@/App'
import { useIsDesktop } from '@/hooks/useMediaQuery'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type MockedFunction } from 'vitest'

describe('App', () => {
  test('confirm that the testing software is behaving', () => {
    expect(true).toBeTruthy()
  })

  describe('Desktop', () => {
    beforeEach(() => {
      // Force desktop media query
      ;(useIsDesktop as MockedFunction<typeof useIsDesktop>).mockReturnValue(
        true
      )
    })

    // Renders header content with logo and cart icon
    it('should render header content with logo and cart icon', () => {
      render(<App />)

      const logo = screen.getByLabelText('sneakers')
      expect(logo).toBeInTheDocument()

      const cartIcon = screen.getByLabelText('Cart')
      expect(cartIcon).toBeInTheDocument()
    })
  })

  describe('Mobile', () => {
    beforeEach(() => {
      // Force mobile media query
      ;(useIsDesktop as MockedFunction<typeof useIsDesktop>).mockReturnValue(
        false
      )
    })

    // Renders header content with logo and cart icon
    it('should render header content with logo and cart icon', () => {
      render(<App />)

      const logo = screen.getByLabelText('sneakers')
      expect(logo).toBeInTheDocument()

      const cartIcon = screen.getByLabelText('Cart')
      expect(cartIcon).toBeInTheDocument()
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

    describe('App - Mobile Product Carousel', () => {
      // Displays mobile product carousel with images
      it('should display mobile product carousel with images', () => {
        render(<App />)

        const carousel = screen.getByLabelText('Product images')
        expect(carousel).toBeInTheDocument()

        const images = screen.getAllByRole('img')
        expect(images.length).toBeGreaterThan(0)
      })
    })

    describe('App - Mobile Cart Dialog', () => {
      // Cart dialog is not displayed when cart icon is not clicked
      it('should not display cart dialog when cart icon is not clicked', () => {
        render(<App />)

        const cartDialog = screen.queryByRole('dialog')
        expect(cartDialog).not.toBeInTheDocument()
      })

      // Cart dialog is displayed at the bottom of the screen
      it('should display cart dialog below the #top-bar element when clicking the cart icon', async () => {
        const getCartDialog = () => screen.queryByRole('dialog')

        render(<App />)

        expect(getCartDialog()).not.toBeInTheDocument()

        const cartIcon = screen.getByRole('button', { name: 'Cart' })
        await waitFor(() => userEvent.click(cartIcon))

        const cartDialog = getCartDialog()
        expect(cartDialog).toBeInTheDocument()

        const container = document.querySelector(
          '#top-bar'
        ) as HTMLElement | null
        const containerHeight = container?.offsetHeight ?? 0
        expect(cartDialog).toHaveStyle(`top: ${containerHeight}px`)
      })

      it('should display cart dialog when clicking the "Add to Cart" button"', async () => {
        const getCartDialog = () => screen.queryByRole('dialog')

        render(<App />)

        expect(getCartDialog()).not.toBeInTheDocument()

        const addToCartButton = screen.getByRole('button', {
          name: /add to cart/i,
        })
        await userEvent.click(addToCartButton)

        expect(getCartDialog()).toBeInTheDocument()
      })
    })

    describe('App - Order/Cart Controls', () => {
      it('should show "0" as the current quantity', async () => {
        render(<App />)

        const quantity = screen.getByLabelText(
          'Current quantity to add to cart'
        )
        expect(quantity.textContent).toBe('0')
      })

      it('should increase the quantity to order when pressing the "Increment" button', async () => {
        render(<App />)

        const quantity = screen.getByLabelText(
          'Current quantity to add to cart'
        )
        expect(quantity.textContent).toBe('0')

        const incrementButton = screen.getByLabelText(/Increment quantity/i)
        await userEvent.click(incrementButton)

        expect(quantity.textContent).toBe('1')
      })

      it('should decrease the quantity to order when pressing the "Decrement" button', async () => {
        render(<App />)

        const quantity = screen.getByLabelText(
          'Current quantity to add to cart'
        )
        expect(quantity.textContent).toBe('0')

        const incrementButton = screen.getByLabelText(/Increment quantity/i)
        const decrementButton = screen.getByLabelText(/Decrement quantity/i)
        await userEvent.click(incrementButton) // 1
        await userEvent.click(incrementButton) // 2
        await userEvent.click(decrementButton) // 1

        expect(quantity.textContent).toBe('1')
      })

      it('should not decrease the quantity below 0 when pressing the "Decrement" button', async () => {
        render(<App />)

        const quantity = screen.getByLabelText(
          'Current quantity to add to cart'
        )
        expect(quantity.textContent).toBe('0')

        const decrementButton = screen.getByLabelText(/Decrement quantity/i)
        await userEvent.click(decrementButton) // 0
        await userEvent.click(decrementButton) // 0

        expect(quantity.textContent).toBe('0')
      })
    })

    describe('App - Add To Cart', () => {
      it('should open an empty cart when pressing the "Add to Cart" button without increasing quantity', async () => {
        render(<App />)

        const getCartDialog = () => screen.queryByRole('dialog')
        expect(getCartDialog()).not.toBeInTheDocument()

        const addToCartButton = screen.getByRole('button', {
          name: /add to cart/i,
        })
        await userEvent.click(addToCartButton)

        expect(getCartDialog()).toBeInTheDocument()
        expect(screen.getByText(/Cart is empty/i)).toBeInTheDocument()
      })

      it('should open a cart with item when pressing the "Add to Cart" button when increasing quantity to 1', async () => {
        // Arrange (and check initial state)
        render(<App />)

        const getCartDialog = () => screen.queryByRole('dialog')
        expect(getCartDialog()).not.toBeInTheDocument()

        // Act
        const incrementButton = screen.getByLabelText(/Increment quantity/i)
        await userEvent.click(incrementButton)

        const addToCartButton = screen.getByRole('button', {
          name: /add to cart/i,
        })
        await userEvent.click(addToCartButton)

        // Assert
        const cartDialog = getCartDialog()
        expect(cartDialog).toBeInTheDocument()

        // Cart dialog exists if the above assertion passes.
        const queryCartDialog = within(cartDialog!)

        // Cart dialog should contain the item
        expect(
          queryCartDialog.queryByText(/Cart is empty/i)
        ).not.toBeInTheDocument()

        expect(
          queryCartDialog.getByText(/Fall Limited Edition Sneakers/i)
        ).toBeInTheDocument()
        expect(queryCartDialog.getByText(/x 1/i)).toBeInTheDocument()
        expect(queryCartDialog.getByText('$125.00')).toBeInTheDocument()
        expect(
          queryCartDialog.getByRole('button', { name: /checkout/i })
        ).toBeInTheDocument()
      })

      it('should open a cart with item when pressing the "Add to Cart" button when increasing quantity to 3', async () => {
        // Arrange (and check initial state)
        render(<App />)

        const getCartDialog = () => screen.queryByRole('dialog')
        expect(getCartDialog()).not.toBeInTheDocument()

        // Act
        const incrementButton = screen.getByLabelText(/Increment quantity/i)
        await userEvent.click(incrementButton) // 1
        await userEvent.click(incrementButton) // 2
        await userEvent.click(incrementButton) // 3

        const addToCartButton = screen.getByRole('button', {
          name: /add to cart/i,
        })
        await userEvent.click(addToCartButton)

        // Assert
        const cartDialog = getCartDialog()
        expect(cartDialog).toBeInTheDocument()

        // Cart dialog exists if the above assertion passes.
        const withinCart = within(cartDialog!)

        // Cart dialog should contain the item x 3
        expect(withinCart.queryByText(/Cart is empty/i)).not.toBeInTheDocument()

        expect(
          withinCart.getByText(new RegExp(/Fall Limited Edition Sneakers/i))
        ).toBeInTheDocument()
        expect(withinCart.getByText(/x 3/i)).toBeInTheDocument()
        expect(withinCart.getByText('$375.00')).toBeInTheDocument()
        expect(
          withinCart.getByRole('button', { name: /checkout/i })
        ).toBeInTheDocument()
      })

      it('should empty the cart when the "Remove item" button on the cart line item is clicked', async () => {
        // Arrange (and check initial state)
        render(<App />)

        const getCartDialog = () => screen.queryByRole('dialog')
        expect(getCartDialog()).not.toBeInTheDocument()

        // Act
        const incrementButton = screen.getByLabelText(/Increment quantity/i)
        await userEvent.click(incrementButton)

        const addToCartButton = screen.getByRole('button', {
          name: /add to cart/i,
        })
        await userEvent.click(addToCartButton)

        const cartDialog = getCartDialog()
        if (!cartDialog) {
          throw new Error('No cart dialog!')
        }

        // Assert
        const withinCart = within(cartDialog)

        // Cart dialog should contain the item
        expect(
          withinCart.getByText(/Fall Limited Edition Sneakers/i)
        ).toBeInTheDocument()
        expect(withinCart.getByText(/x 1/i)).toBeInTheDocument()
        expect(withinCart.getByText('$125.00')).toBeInTheDocument()

        // Act
        const removeItemFromCart = withinCart.getByLabelText(
          'Remove item from cart'
        )
        await userEvent.click(removeItemFromCart)

        // Assert
        expect(withinCart.getByText(/cart is empty/i))
      })
    })
  })
})
