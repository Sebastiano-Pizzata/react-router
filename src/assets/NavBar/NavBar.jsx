import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/posts">Lista posts</NavLink>
        </nav>
    )
}


export default NavBar
