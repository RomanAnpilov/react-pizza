import React from "react";

const CartItem = () => {
  return (
    <li className="cartItem">
      <div className="item-left">
        <img width={80} height={80} src="img/pizza/1.png" alt="pizza" />
        <div className="pizza-info">
          <h3>Сырный цыпленок</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className="counter">
        <img className="btn" src="img/minus.svg" alt="minus" />
        <b>2</b>
        <img className="btn" src="img/plus.svg" alt="plus" />
      </div>
      <b>770 ₽</b>
      <img
        style={{ "border-color": "#D0D0D0" }}
        className="btn"
        src="img/remove.svg"
        alt=""
      />
    </li>
  );
};

export default CartItem;
