import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" >
                <div className="header-left">
                    <img src="img/logo.svg" alt="logo" />
                    <div width={38} height={38} className="header-info">
                        <h3>React pizza</h3>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </ Link>
            <Link to="/cart">
                <div className="header-cart">
                    <span>520 ₽</span>
                    <div className="delimetr"></div>
                    <img src="img/cart.svg" alt="" />
                    <span>3</span>
                </div>
            </Link>
        </header>
    )
}

export default Header;