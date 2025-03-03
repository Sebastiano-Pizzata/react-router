import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container ">
                    <NavLink className="Navbar-brand nav-link" to="/">Home</NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" aria-current="page">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/posts" className="nav-link" aria-current="page">Lista posts</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>






        </>
    )
}


export default NavBar
