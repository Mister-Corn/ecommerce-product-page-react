import { useAppState } from '@/data/globalState'
import { useMeasureDimensions } from '@/hooks/useMeasureDimensions'
import * as Dialog from '@radix-ui/react-dialog'
import { type ReactNode } from 'react'
import MobileCartDisplay from './MobileCartDisplay'

export type MobileCartDialogProps = {
  children: ReactNode
}

/**
 * Renders a mobile cart dialog that displays the cart contents.
 * @note The mobile cart renders below the `#top-bar` element.
 *
 * @param props.children - The children to render as the dialog trigger (e.g.
 * "Cart" button).
 * @returns The rendered mobile cart dialog.
 */
function MobileCartDialog({ children }: MobileCartDialogProps) {
  const cartContents = useAppState((state) => state.cartContents)
  const clearCart = useAppState((state) => state.clearCart)

  const { element: topBar, windowSize } = useMeasureDimensions('#top-bar')

  /**
   * The offset is the distance from the right side of the screen to the right
   * end of the top bar element.
   *
   * This is to align the dialog with the right end of the top bar in desktop.
   */
  const rightOffset = (windowSize.innerWidth - topBar.width) / 2

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content
          style={{ top: `${topBar.height}px`, right: `${rightOffset}px` }}
          className="fixed z-50 w-full duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 lg:max-w-[22.5rem]"
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
