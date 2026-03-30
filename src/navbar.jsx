import Navstyles from "./navbar.module.css"
function Navbar() {
    return (
        <div className={Navstyles.navbar}>
                <li className={Navstyles.li}>Home</li>
                <li className={Navstyles.li}>About</li>
                <li className={Navstyles.li}>Services</li>
                <li className={Navstyles.li}>Contact</li>
        </div>
    )
}

export default Navbar