import classNames from "classnames";
import React from "react";

const PizzaCard = ({ id, name, imageUrl, price, types, sizes }) => {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(availableSizes.indexOf(sizes[0]));

  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  }

  return (
    <div className="pizza-card">
      <img src={imageUrl} alt="pizza" />
      <h4>{name}</h4>
      <div className="selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
            key={type}
              onClick={() => onSelectType(index)}
              className={classNames(
                `${activeType === index ? "active" : ""}`,
                `${!types.includes(index) ? "disabled" : ""}`
              )}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
        {availableSizes.map((size, index) => (
            <li
            key={size}
              onClick={() => onSelectSize(index)}
              className={classNames(
                `${activeSize === index ? "active" : ""}`,
                `${!sizes.includes(size) ? "disabled" : ""}`
              )}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <span>от {price} ₽</span>
        <div className="addBtn">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
