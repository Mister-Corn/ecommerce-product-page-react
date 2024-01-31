import { create } from 'zustand'
import { type CartLineItem } from './productCatalog'

type State = {
  /**
   * The item in the cart, if any.
   */
  cartContents?: CartLineItem
  /**
   * Pertains to the controls in the UI.
   */
  orderControls: {
    /**
     * The quantity that is selected to order in the UI.
     */
    quantity: number
  }
}

type Actions = {
  // Order Controls
  /**
   * Action that adjusts the quantity to order displayed in the UI, both up and
   * down.
   *
   * @note Quantity cannot be reduced below 0.
   *
   * @param direction - The direction to adjust the quantity. 'Increment' increases
   * (+), 'decrement' decreases (-).
   */
  adjustQuantity: (direction: 'increment' | 'decrement') => void
  // Cart
  /**
   * Action that reads the quantity in orderControls, and adds that many product
   * of "sneakersFallLimited" to cartContents.
   */
  addFallSneakersToCart: () => void
  /**
   * Clears the (singular) item in the cart.
   */
  clearCart: () => void
}

/**
 * Global state hook, using Zustand under the hood.
 *
 * @see https://docs.pmnd.rs/zustand/guides/updating-state
 */
export const useAppState = create<State & Actions>((set) => ({
  cartContents: undefined,
  orderControls: {
    quantity: 0,
  },
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
}))
