import React from "react";
import './css/NavBar.css';
import brainLogo from './images/electro-brain.png'
// import signoutIco from './images/signout-ico.png'

const Navbar = () => {
    return(
        <div className="navbarContainer shadow-1">
            <nav className="navbar">
                <div className="navlogo">
                    <span style={{display: 'flex'}}>
                        <img src={brainLogo} alt="Brain" />
                        <h1>Brain Link _ Face Detector</h1>
                    </span>
                </div>
                <div className="signout">
                    <span style={{display: 'flex'}}>
                        {/* <p>Sair</p>
                        <img className="signout-icon" src={signoutIco} alt="Sign out" /> */}
                    </span>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;