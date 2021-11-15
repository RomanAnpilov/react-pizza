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
const sortIems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  
 

  const items = useSelector((data) => data.pizzas.items.data);
  const {category, sortBy} = useSelector((data) => data.filters)
  const isLoaded = useSelector((data) => data.pizzas.isLoaded);

  
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);
console.log(items)

  return (
    <>
      <div className="top-content">
        <Categories />
        <SortPopup />
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
