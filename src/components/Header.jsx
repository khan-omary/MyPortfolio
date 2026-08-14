import { useState } from "react";
import "./Header.css"
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-container">

                <h1 className="logo"><span>Fahim</span>Omary</h1>

                <nav className={menuOpen ? "nav-open" : ""}>
                    <a href="#hero">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    {/* <a href="">Experianc</a> */}
                    <a href="#contact">Contact</a>
                </nav>

                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (<BiX className="menu-icon" />) : (<BiMenuAltRight className="menu-icon" />
                    )}
                </button>

            </div>
        </header>
    );
}

export default Header;