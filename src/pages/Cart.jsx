import React from "react";
import CartItem from "../components/CartItem"

function Cart() {
  return (
    <div className="cart">
        <div className="top">
            <div className="left-cart">
                <img src="img/cartSvg.svg" alt="cart" />
                <h1>Корзина</h1>
            </div>
            <div className="right-cart">
                <img src="img/basket.svg" alt="basket" />
                <span>Очистить корзину</span>
            </div>
        </div>
        <div className="items">
            <ul>
                <CartItem />
            </ul>
        </div>
        <div className="bottom">
            <div className="info">
                <span>Всего пицц: <b>3 шт.</b></span>
                <span>Сумма заказа: <b>900 ₽</b></span>
            </div>
            <div className="buttons">
                <button className="btn backB">Вернуться назад</button>
                <button className="btn payB">Оплатить сейчас</button>
            </div>
        </div>
    </div>

    // <div className="cart">
    //   <div className="empty">
    //     <h1>Корзина пустая ☹️</h1>
    //     <p>
    //         Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы заказать
    //         пиццу, перейди на главную страницу.
    //     </p>
    //     <img src="img/empty.svg" alt="" />
    //     <button className="btn black">Вернуться назад</button>
    //   </div>
    // </div>
  );
}

export default Cart;
