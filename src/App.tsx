import './App.css'
import mobileMenuIcon from './assets/svgs/icon-menu.svg'
import logo from './assets/svgs/logo.svg'
import cart from './assets/svgs/icon-cart.svg'
import avatar from './assets/image-avatar.png'

function App() {
    return (
        <>
            <header className="flex flex-row justify-between items-center px-6 pt-5 pb-7 bg-white">
                <div className="flex flex-row gap-4">
                    <img src={mobileMenuIcon} alt="Menu" />
                    <img src={logo} alt="logo" />
                </div>

                <div className="flex flex-row gap-5">
                    <img src={cart} alt="Your cart" />
                    <img src={avatar} alt="Your account" className="w-6 h-6" />
                </div>
            </header>
        </>
    )
}

export default App
