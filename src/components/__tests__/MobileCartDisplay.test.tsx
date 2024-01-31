// Generated by CodiumAI
import { render, screen, waitFor } from '@testing-library/react'
import sneakersFallLimitedThumbnail from '@/assets/products/image-product-1-thumbnail.jpg'
import MobileCartDisplay, {
  type MobileCartDisplayProps,
} from '../MobileCartDisplay'
import userEvent from '@testing-library/user-event'

type CartContents = MobileCartDisplayProps['cartContents']

describe('MobileCartDisplay', () => {
  // Renders cart header and content with product image, description, and price summary, remove from cart button, and checkout button when cartContents is provided
  it('should render cart header and content when cartContents is provided', () => {
    // Arrange
    const cartContents: CartContents = {
      productId: 'sneakersFallLimited',
      quantity: 2,
    }
    const clearCartMock = vi.fn()

    // Act
    render(
      <MobileCartDisplay
        cartContents={cartContents}
        clearCart={clearCartMock}
      />
    )

    // Assert
    expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument()
    expect(screen.getByText('$125.00 x 2')).toBeInTheDocument()
    expect(screen.getByText('$250.00')).toBeInTheDocument()
    expect(screen.getByLabelText('Remove item from cart')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /checkout/i })
    ).toBeInTheDocument()
  })

  // Renders empty cart state when cartContents is undefined
  it('should render the empty cart state when cartContents is not provided', () => {
    // Arrange
    const clearCartMock = vi.fn()
    const cartContents: CartContents = undefined

    // Act
    render(
      <MobileCartDisplay
        cartContents={cartContents}
        clearCart={clearCartMock}
      />
    )

    // Assert
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()

    const clearCartButton = screen.queryByLabelText(/Remove item from cart/i)
    expect(clearCartButton).not.toBeInTheDocument()
  })

  // Displays correct product thumbnail
  it('should render correct product thumbnail when cartContents is provided', () => {
    // Arrange
    const clearCartMock = vi.fn()
    const cartContents: CartContents = {
      productId: 'sneakersFallLimited',
      quantity: 2,
    }

    // Act
    render(
      <MobileCartDisplay
        cartContents={cartContents}
        clearCart={clearCartMock}
      />
    )

    // Assert
    expect(
      screen
        .getByAltText(/Side view of Fall Limited Edition Sneakers/i)
        .getAttribute('src')
    ).toBe(sneakersFallLimitedThumbnail)
  })

  // Calls the `clearCart` prop when user clicks on the "Remove item from cart" button
  it('should call the clearCart prop when user clicks on the "Remove item from cart" button', async () => {
    // Arrange
    const clearCartMock = vi.fn()
    const cartContents: CartContents = {
      productId: 'sneakersFallLimited',
      quantity: 2,
    }

    // Act
    render(
      <MobileCartDisplay
        cartContents={cartContents}
        clearCart={clearCartMock}
      />
    )

    const clearCartButton = screen.getByLabelText(/Remove item from cart/i)
    await waitFor(() => userEvent.click(clearCartButton))

    // Assert
    expect(clearCartMock).toHaveBeenCalledTimes(1)
  })
})
