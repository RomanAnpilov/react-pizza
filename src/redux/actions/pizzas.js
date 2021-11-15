import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  axios
    .get(
      `https://619242f9aeab5c0017105eb7.mockapi.io/pizzas?${
        category !== null ? `category=${category}` : ""
      }&sortBy=${sortBy.type}&order=${sortBy.order}`
    )
    .then((data) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
