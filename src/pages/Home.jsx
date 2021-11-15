import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Categories, SortPopup, PizzaCard } from "../components";
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
    const dispatch = useDispatch();
    const  category  = ["price", "asc"];
    const sortBy = null;
    React.useEffect(() => {
        dispatch(fetchPizzas(["price", "asc"], null));
    }, []);

  const items = useSelector((pizzas) => pizzas.items.data);
  const isLoaded = useSelector((pizzas) =>pizzas.isLoaded)
    return (
    <>
      <div className="top-content">
        <Categories /> 
        <SortPopup />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizza-container">
          {isLoaded ? items.map((item) => <PizzaCard key={item.id} {...item}/>) : ""}
      </div>
    </>
  );
}

export default Home;
