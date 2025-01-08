import Button from "./Button"
import Logo from "./Logo"
import Time from "./Time"

function Header() {
    return (
        <div className="flex justify-between items-center p-4 absolute top-0 w-full">
            <Logo />
            <Time />
            <Button>Hire Me</Button>
        </div>
    )
}

export default Header
