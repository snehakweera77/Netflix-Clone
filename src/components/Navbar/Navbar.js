import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__left">
                <img
                    className="navbar__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo" 
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="navbar__right">
                <Search className="navbar__right__icon"/>
                <span>KID</span>
                <Notifications className="navbar__right__icon"/>
                <img
                    className="navbar__avatar" 
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Netflix avatar" 
                />
                <div className="navbar__right__profile">
                    <ArrowDropDown className="navbar__right__icon"/>
                    <div className="navbar__right__profile__options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        
            
            
            
        </div>
    )
}

export default Navbar
