import React from "react";
import '../styles/header.css';

const Header = () => {
    return (
        <section className="header">
        <div className="nav__container">
            <div className="nav__row">
                <ul className="nav__items">
                    <div className="logo__container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png" className="logo__image">

                        </img>
                    </div>
                    <div className="nav_items__container">
                    <li className="nav__item">
                        <a>App</a>
                    </li>
                    <li className="nav__item">
                        <a href="/about">F.A.Q's</a>
                    </li>
                    <li className="nav__item">
                    <a href="/about">Contact</a>
                    </li>
                    <li className="nav__item">
                    <a href="/about">Blog</a>
                    </li>
                    <li className="nav__item __cta">
                    <div className="__space_bar">
                    <a href="/about">join now</a>
                    </div>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
        </section>
    )
}
export default Header;