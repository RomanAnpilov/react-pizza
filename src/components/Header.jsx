import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <img src="img/logo.svg" alt="logo" />
                <div width={38} height={38} className="header-info">
                    <h3>React pizza</h3>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className="header-cart">
                <span>520 ₽</span>
                <div className="delimetr"></div>
                <img src="img/cart.svg" alt="" />
                <span>3</span>
            </div>
        </header>
    )
}

export default Header;