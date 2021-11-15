import React from 'react';

function Cart () {
    return (
        <div className="cart">
            <div className="top">
                <img src="img/cartSvg.svg" alt="cart" />
            </div>
            <div className="items"></div>
            <div className="bottom">
                <div className="info"></div>
                <div className="buttons"></div>
            </div>
        </div>
    )
}

export default Cart;