import React from "react";
import {FaBars} from 'react-icons/fa'
import Logo from '../../assets/logo_white.png';
import {NavLink} from "react-router-dom";
import './style.css';

function NavBar(){
    return (
        <>
            <nav>
                <NavLink to="/" className="navLink">
                    <img src={Logo} alt={"Главная"} />
                    {/*<h1>Logo</h1>*/}
                </NavLink>
                <div className="faBars">
                    <FaBars />
                </div>
                <div className="navMenu">
                    <NavLink to="/trainings" className="navLink">
                        Тренировки
                    </NavLink>
                    <NavLink to="/parties" className="navLink">
                        Праздники
                    </NavLink>
                    <NavLink to="/competitions" className="navLink">
                        Соревнования
                    </NavLink>
                    <NavLink to="/contacts" className="navLink">
                        Контакты
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;