import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaCard } from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector((data) => data.pizzas.items.data);
  const { category, sortBy } = useSelector((data) => data.filters);
  const isLoaded = useSelector((data) => data.pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <>
      <div className="top-content">
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={sortItems}
          activeCategory={sortBy}
          onSelectSort={(type) => onSelectSortType(type)}
        />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizza-container">
        {isLoaded
          ? items.map((item) => <PizzaCard key={item.id} {...item} />)
          : ""}
      </div>
    </>
  );
}

export default Home;
