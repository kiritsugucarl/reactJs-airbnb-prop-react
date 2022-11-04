import airbnb from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}