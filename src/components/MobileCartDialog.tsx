import { useAppState } from '@/data/globalState'
import { useLayoutEffect, useState, type ReactNode } from 'react'
import MobileCartDisplay from './MobileCartDisplay'
import * as Dialog from '@radix-ui/react-dialog'

export type MobileCartDialogProps = {
  children: ReactNode
}

/**
 * Renders a mobile cart dialog that displays the cart contents.
 * @note The mobile cart renders below the header element.
 *
 * @param props.children - The children to render as the dialog trigger (e.g.
 * "Cart" button).
 * @returns The rendered mobile cart dialog.
 */
function MobileCartDialog({ children }: MobileCartDialogProps) {
  const cartContents = useAppState((state) => state.cartContents)
  const clearCart = useAppState((state) => state.clearCart)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    const header = document.querySelector('header')

    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height)
    }
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content
          style={{ top: `${headerHeight}px` }}
          className="fixed left-0 z-50 w-full duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <MobileCartDisplay
            cartContents={cartContents}
            clearCart={clearCart}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default MobileCartDialog
