import logo from '../images/logo.png';
import menuList from './menuList';
import { NavLink, Link } from 'react-router-dom';
import DropDown from './DropDown';
import './NavBar.css';
import { useState } from 'react';
import MatchMedia from './MatchMedia';




function NavBar() {
    const [menuOn, setMenuOn] = useState(false);
    const [subOn, setSubOn] = useState(false);
    let isMobile = MatchMedia("(max-width: 768px)");

    function linkClicked() {
        setSubOn(false);
        isMobile && setMenuOn(false);
    }

    function multiClicked(e) {
        setSubOn(!subOn);
        e.preventDefault();
    }


    return (
        <div className='NavComponent'>
            <i onClick={() => setMenuOn(true)} className="las la-bars"></i>
            <img className='logo' src={logo} alt="Max" width="70px" />
            <nav className={`nav-closed ${menuOn ? 'nav-open' : ''}`}>
                <i onClick={() => setMenuOn(false)} className="las la-times"></i>
                <div className="links-wrapper">
                        {menuList.map((menu, index) => (
                        menu.subMenu ? (
                        <><Link onClick={multiClicked} key={index.toString()} className="main-link" to={""}>{menu.name}</Link><DropDown onClick={linkClicked} className={`sub-closed ${subOn ? 'sub-open' : ''}`}  list={menu.subMenu} /></>
                        ) : (
                            <NavLink onClick={linkClicked} key={index.toString()} className="main-link" to={menu.path}>{menu.name}</NavLink>
                        )
                    ))}
                </div>
            </nav>
	    </div>
    )
}


export default NavBar;