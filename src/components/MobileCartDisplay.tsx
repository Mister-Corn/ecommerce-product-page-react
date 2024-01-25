function MobileCartDisplay() {
  return (
    <div className="absolute left-0 top-0 z-20 h-full w-full p-2">
      <div className="flex h-[90%] flex-col rounded-[10px] bg-white shadow-xl">
        <div className="border-b-[1px] border-[#e4e9f2] p-6">
          <h2 className="font-bold text-black-darker">Cart</h2>
        </div>

        <div className="flex flex-grow items-center justify-center">
          <p className="font-bold text-black-lighter">Your cart is empty.</p>
        </div>
      </div>
    </div>
  )
}

export default MobileCartDisplay
