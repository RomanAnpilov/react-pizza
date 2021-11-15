import React from "react";

function Cart() {
  return (
    // <div className="cart">
    //     <div className="top">
    //         <div className="left-cart">
    //             <img src="img/cartSvg.svg" alt="cart" />
    //             <h1>Корзина</h1>
    //         </div>
    //         <div className="right-cart">
    //             <img src="img/basket.svg" alt="basket" />
    //             <span>Очистить корзину</span>
    //         </div>
    //     </div>
    //     <div className="items">
    //         <ul>
    //             <li className="cartItem">
    //                 <div className="item-left">
    //                     <img width={80} height={80} src="img/pizza/1.png" alt="pizza" />
    //                     <div className="pizza-info">
    //                         <h3>Сырный цыпленок</h3>
    //                         <p>тонкое тесто, 26 см.</p>
    //                     </div>
    //                 </div>
    //                 <div className="counter">
    //                     <img className="btn" src="img/minus.svg" alt="minus" />
    //                     <b>2</b>
    //                     <img className="btn" src="img/plus.svg" alt="plus" />
    //                 </div>
    //                 <b>770 ₽</b>
    //                 <img style={{"border-color" : "#D0D0D0"}} className="btn" src="img/remove.svg" alt="" />
    //             </li>

    //             <li className="cartItem">
    //                 <div className="item-left">
    //                     <img width={80} height={80} src="img/pizza/1.png" alt="pizza" />
    //                     <div className="pizza-info">
    //                         <h3>Сырный цыпленок</h3>
    //                         <p>тонкое тесто, 26 см.</p>
    //                     </div>
    //                 </div>
    //                 <div className="counter">
    //                     <img className="btn" src="img/minus.svg" alt="minus" />
    //                     <b>2</b>
    //                     <img className="btn" src="img/plus.svg" alt="plus" />
    //                 </div>
    //                 <b>770 ₽</b>
    //                 <img style={{"border-color" : "#D0D0D0"}} className="btn" src="img/remove.svg" alt="" />
    //             </li>
    //         </ul>
    //     </div>
    //     <div className="bottom">
    //         <div className="info">
    //             <span>Всего пицц: <b>3 шт.</b></span>
    //             <span>Сумма заказа: <b>900 ₽</b></span>
    //         </div>
    //         <div className="buttons">
    //             <button className="btn backB">Вернуться назад</button>
    //             <button className="btn payB">Оплатить сейчас</button>
    //         </div>
    //     </div>
    // </div>

    <div className="cart">
      <div className="empty">
        <h1>Корзина пустая ☹️</h1>
        <p>
            Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы заказать
            пиццу, перейди на главную страницу.
        </p>
        <img src="img/empty.svg" alt="" />
        <button className="btn black">Вернуться назад</button>
      </div>
    </div>
  );
}

export default Cart;
