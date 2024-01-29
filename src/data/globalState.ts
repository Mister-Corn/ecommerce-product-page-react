import { create } from 'zustand'
import { CartLineItem } from './productCatalog'

type State = {
  cartContents?: CartLineItem
  orderControls: {
    quantity: number
  }
}

type Actions = {
  // Cart
  addFallSneakersToCart: () => void
  clearCart: () => void
  // Order Controls
  adjustQuantity: (direction: 'increment' | 'decrement') => void
}

export const useAppState = create<State & Actions>((set) => ({
  cartContents: undefined,
  orderControls: {
    quantity: 0,
  },
  addFallSneakersToCart: () =>
    set((state) => {
      const quantityRequested = state.orderControls.quantity

      if (!quantityRequested) {
        return state
      }

      const newCartContents: CartLineItem = {
        productId: 'sneakersFallLimited',
        // Currently only selling 'sneakersFallLimited'. If there's an item in
        // the cart, it's that product, so add the quantityRequested to the
        // quantity already in cartContents.
        quantity: state.cartContents
          ? state.cartContents.quantity + quantityRequested
          : quantityRequested,
      }

      return {
        cartContents: newCartContents,
        orderControls: {
          quantity: 0,
        },
      }
    }),
  clearCart: () =>
    set(() => {
      return {
        cartContents: undefined,
      }
    }),
  adjustQuantity: (direction: 'increment' | 'decrement') =>
    set((state) => {
      const currentQty = state.orderControls.quantity

      if (direction === 'decrement') {
        return {
          orderControls: {
            // Quantity cannot go below 0.
            quantity: currentQty !== 0 ? currentQty - 1 : currentQty,
          },
        }
      }

      return {
        orderControls: {
          quantity: currentQty + 1,
        },
      }
    }),
}))
