import React from "react";
import Navstyles from "./navBar.module.css"
import { Link } from "react-router-dom";
export const Navbar = () => {
    const user = 'bolu'
    return (
        <div className={Navstyles.navbar}>
            
            <div>
                <ul className={Navstyles.ul}>
                    <li className={Navstyles.li}><Link to={"/"}>Home</Link></li>
                    <li className={Navstyles.li}><Link to={"product"}>Product</Link></li>
                    <li className={Navstyles.li}><Link to={"about"}>About</Link></li>
                    <li className={Navstyles.li}><Link to={"contact"}>Contact</Link></li>
                    <li className={Navstyles.li}><Link to={`profile/${user}`}>Profile</Link></li> 
                    <li className={Navstyles.li}><Link to={"login"}>Login</Link></li> 
                    <li className={Navstyles.li}><Link to={"Register"}>Register</Link></li>                  
                </ul>
            </div>
        </div>
    )
}