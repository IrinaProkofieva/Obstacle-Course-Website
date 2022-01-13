import React, {useState} from "react";
import {FaBars} from 'react-icons/fa'
import Logo from '../../assets/logo_white.png';
import {NavLink} from "react-router-dom";
import './style.css';

function NavBar(){
    const [isShown, setIsShown] = useState(false);

    const showNavbarDropout = () => {
        if(window.innerWidth<900)
            setIsShown(!isShown)
    }
    return (
        <>
            <nav>
                <NavLink to="/" className="navLink">
                    <img src={Logo} alt={"Главная"} />
                </NavLink>
                <div className="faBars" onClick={showNavbarDropout}>
                    <FaBars />
                </div>
                <div className="navMenu" id={isShown?"shown":""}>
                    <NavLink to="/trainings" className="navLink" onClick={showNavbarDropout}>
                        Тренировки
                    </NavLink>
                    <NavLink to="/parties" className="navLink" onClick={showNavbarDropout}>
                        Праздники
                    </NavLink>
                    <NavLink to="/competitions" className="navLink" onClick={showNavbarDropout}>
                        Соревнования
                    </NavLink>
                    <NavLink to="/contacts" className="navLink" onClick={showNavbarDropout}>
                        Контакты
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;