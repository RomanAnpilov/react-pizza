import React from "react";

const Categories = ({ items, activeCategory, onClickCategory }) => {
  return (
    <ul className="categories">
      <li
        onClick={() => onClickCategory(null)}
        className={activeCategory === null ? "active" : ""}
      >
        Все
      </li>
      {items.map((category, index) => (
        <li
          key={`${category.name}_${index}`}
          onClick={() => onClickCategory(index)}
          className={activeCategory === index ? "active" : ""}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
