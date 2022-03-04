import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.navbar}>
            <ul className={s.dropdown}>
            <li><NavLink to={'/dz1'}>ДЗ1</NavLink></li>
            <li><NavLink to={'/dz2'}>ДЗ2</NavLink></li>
            <li><NavLink to={'/dz3'}>ДЗ3</NavLink></li>
            <li><NavLink to={'/dz4'}>ДЗ4</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
