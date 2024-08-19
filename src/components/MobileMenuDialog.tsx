import mobileMenuIcon from '@/assets/svgs/icon-menu.svg'
import closeIcon from '@/assets/svgs/icon-close.svg'
import * as Dialog from '@radix-ui/react-dialog'

function MobileMenuDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <img
          src={mobileMenuIcon}
          alt="Link menu"
          aria-label="Open mobile menu"
          className="h-4 w-4"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="fixed left-0 top-0 z-50 h-full w-full max-w-64 bg-white p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
          <Dialog.DialogClose>
            <img
              src={closeIcon}
              alt="Close"
              aria-label="Close link menu"
              className="h-4 w-4"
            />
          </Dialog.DialogClose>

          <nav className="mt-14 flex flex-col gap-5">
            <a href="/" className="text-lg font-bold">
              Collections
            </a>

            <a href="/" className="text-lg font-bold">
              Men
            </a>

            <a href="/" className="text-lg font-bold">
              Women
            </a>

            <a href="/" className="text-lg font-bold">
              About
            </a>

            <a href="/" className="text-lg font-bold">
              Contact
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default MobileMenuDialog
